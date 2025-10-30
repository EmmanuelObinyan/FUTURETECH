import React, { useContext, createContext, useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";
import { db } from "./Firebase";
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  // const user=Auth.currentUser
  const { author } = useAuth();
  // loading state
  const [loading, setLoading] = useState(true);
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
      toast.error("sign in — to create posts", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "red",
        },
      });
      return;
    }
    // send data to firestore
    setLoading(true);
    try {
      const BlogID = "blog" + Date.now();
      const response = doc(db, "author", author.uid, "blogs", BlogID);
      await setDoc(response, {
        title: blog.title,
        category: blog.category,
        content: content,
        likes: 0,
        comment: 0,
        createdAt:new Date().toLocaleTimeString()
      });
      toast.success("Blog post created successfully", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setLoading(false);
      // clean up the input fields
      setTimeout(() => {
        setBlog({ ...blog, title: "", category: "" });
        setContent("");
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // clean up the input fields
    setTimeout(() => {
      setBlog({ ...blog, title: "", category: "" });
      setContent("");
    }, 3000);
  };
  // for the updating personal profile

  return (
    <ProfileContext.Provider
      value={{
        content,
        setContent,
        handleBlur,
        handleChange,
        blog,
        BlogSubmit,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => {
  return useContext(ProfileContext);
};
