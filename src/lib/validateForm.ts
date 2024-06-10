import { FormData } from "@/types/formData";
import Swal from "sweetalert2";

export const validateForm = (data: FormData): boolean => {
  const { fullName, email, subject, message } = data;

  // Check if any field is empty
  if (!fullName || !email || !subject || !message) {
    Swal.fire({
      icon: "info",
      iconColor: "green",
      text: "All fields are required!",
      confirmButtonColor: "#000000",
    });
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "info",
      iconColor: "green",
      text: "Invalid email address!",
      confirmButtonColor: "#000000",
    });
    return false;
  }

  return true;
};
