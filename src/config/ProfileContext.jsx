import React, { useContext, createContext, useState, useEffect } from "react";
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection,
  where,
  query,
  increment,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { db, storageRef } from "./Firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const navigate = useNavigate();
  // const user=Auth.currentUser
  const { author } = useAuth();
  // loading state
  const [loading, setLoading] = useState(false);
  //  for the blog content
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState({
    title: "",
    category: "",
  });
  // handling blogcontent change
  const handleBlur = (newContent) => {
    setContent(newContent);
  };
  // to handling blog title and category change
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  // to submit the blog contents
  const BlogSubmit = async () => {
    let isValid = true;

    if (blog.title.trim() === "") {
      isValid = false;
      toast.error("Blog title is required", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
    }

    if (blog.category.trim() === "") {
      isValid = false;
      toast.error("Blog category is required", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
    }

    if (content.trim() === "") {
      isValid = false;
      toast.error("Blog content cannot be empty", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
    }
    // clean up the input fields
    setTimeout(() => {
      setBlog({ ...blog, title: "", category: "" });
      setContent("");
    }, 3000);

    // stop if validation failed
    if (!isValid) return;

    // check user
    if (!author) {
      toast.error("sign in to create post", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
      return;
    }
    // send blog data to firestore
    setLoading(true);
    try {
      const BlogID = "blog" + Date.now();
      const response = doc(db, "blogs", BlogID);
      // to gethe author name
      const document = doc(db, "author", author.uid);
      const data = await getDoc(document);

      await setDoc(response, {
        authorId: author.uid, // Add the author's ID for lookups
        author: data.exists() ? data.data().fullname : null,
        title: blog.title,
        category: blog.category,
        content: content,
        likes: 0,
        comment: 0,
        createdAt: new Date().toLocaleDateString(),
      });
      toast.success("Blog post created successfully", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // clean up the input fields
    setTimeout(() => {
      setBlog({ ...blog, title: "", category: "" });
      setContent("");
    }, 3000);
  };
  //
  // to like a blog post
  const handleLike = async (blogId) => {
    if (!author) {
      return toast.error("Sign in to like posts", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
    }

    const blogRef = doc(db, "blogs", blogId);
    const likeRef = doc(db, "blogs", blogId, "likes", author.uid);

    try {
      const docSnap = await getDoc(likeRef);
      if (docSnap.exists()) {
        // Already liked → unlike
        await deleteDoc(likeRef);
        await updateDoc(blogRef, { likes: increment(-1) });
        toast.success("unliked", {
          style: {
            textTransform: "capitalize",
            backgroundColor: "#1e1e1e",
            color: "green",
          },
        });
      } else {
        // Not liked → like
        await setDoc(likeRef, { authorId: author.uid, likedAt: new Date() });
        await updateDoc(blogRef, { likes: increment(1) });
        toast.success("liked", {
          style: {
            textTransform: "capitalize",
            backgroundColor: "#1e1e1e",
            color: "green",
          },
        });
      }
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    }
  };
  //
  //
  //
  // for the updating personal profile
  const [profile, setProfile] = useState({
    fullname: "",
    status: "",
    nationality: "",
    message: "",
    phone: "",
    phoneCode: "",
  });
  //
  //
  //
  // to reduce the lenght of fullname
  useEffect(() => {
    if (profile.fullname.length > 30) {
      const slice = profile.fullname.slice(0, 30);
      setProfile({ ...profile, fullname: slice });
      toast.error("name is longer than 30 characters", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
    }
    if (profile.phone.length > 10) {
      const slice = profile.phone.slice(0, 10);
      setProfile({ ...profile, phone: slice });
    }
  }, [profile.fullname, profile.phone]);
  // reading user data
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  // validate the profile input data
  const profileSubmit = async () => {
    if (!author) {
      toast.error("sign in first", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
      setTimeout(() => {
        setProfile({
          ...profile,
          fullname: "",
          message: "",
          phone: "",
          phoneCode: "",
          nationality: "",
          status: "",
        });
      }, 2000);
      return;
    }
    setLoading(true);
    try {
      const document = doc(db, "author", author.uid);
      await setDoc(
        document,
        {
          profilepic: null,
          fullname: profile.fullname,
          email: author.email,
          nationality: profile.nationality,
          status: profile.status,
          phone_number: `${profile.phoneCode} ${profile.phone}`,
          biography: profile.message,
        },
        { merge: true }
      );
      toast.success("profile updated successfully", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setProfile({
          ...profile,
          fullname: "",
          message: "",
          phone: "",
          phoneCode: "",
          nationality: "",
          status: "",
        });
      }, 2000);
    }
  };
  // for creating the profile image in the firestore
  const [image, setImage] = useState(null);
  const [currentpic, setCurrenctPic] = useState("");
  // for reading image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  //  updating image to firestore
  const uploadImage = async () => {
    if (!image) return;
    if (!author) {
      toast.error("sign in first for image upload", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
      return;
    }
    setLoading(true);
    try {
      const getdocref = doc(db, "author", author.uid);
      const document = await getDoc(getdocref);
      if (!document.exists()) {
        await setDoc(getdocref, {
          email: author.email,
        });
      }
      if (document.exists() && document.data().profilepic) {
        const oldpic = document.data().profilepic;
        try {
          const desertRef = ref(storageRef, oldpic);
          await deleteObject(desertRef);
        } catch (error) {
          console.log(error + "no old pic skipping delete");
        }
      }
      const imagename = `profile/${author.uid}/profile.png`;
      const imageRef = ref(storageRef, imagename);
      await uploadBytes(imageRef, image);
      const imageURL = await getDownloadURL(imageRef);
      // updating the image to firestore
      await updateDoc(getdocref, {
        profilepic: imageURL,
      });
      setCurrenctPic(imageURL);
      toast.success("profile picture updated", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // for the useeffect
  useEffect(() => {
    uploadImage();
  }, [image, author]);

  // for getting the user data profile
  const [User, setUser] = useState(null);
  const [loads, setLoads] = useState(true);
  useEffect(() => {
    if (!author) {
      setLoads(false);
      return;
    }
    const docRef = doc(db, "author", author.uid);
    const unsubscribe = onSnapshot(
      docRef,
      (snapShot) => {
        if (snapShot.exists()) {
          setUser(snapShot.data());
        } else {
          // no document found for this user — clear User so UI can handle empty state
          setUser(null);
        }
        setLoads(false);
      },
      (err) => {
        console.error("onSnapshot error:", err);
        setLoads(false);
      }
    );

    return () => unsubscribe();
  }, [author]);

  // for the profile blog post
  const [blogpost, setBlogpost] = useState([]);
  useEffect(() => {
    if (!author) return;
    const collects = collection(db, "blogs");
    const querys = query(collects, where("authorId", "==", author.uid));
    const unsubscribeBlog = onSnapshot(querys, (snapshot) => {
      const snapshots = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogpost(snapshots);
    });
    return () => unsubscribeBlog();
  }, [author]);

  return (
    <ProfileContext.Provider
      value={{
        author,
        User,
        content,
        setContent,
        handleBlur,
        handleChange,
        blog,
        BlogSubmit,
        loading,
        loads,
        handleProfileChange,
        profile,
        profileSubmit,
        handleImageChange,
        image,
        currentpic,
        blogpost,
        handleLike,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => {
  return useContext(ProfileContext);
};
