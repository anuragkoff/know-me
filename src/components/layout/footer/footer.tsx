import "./footer.css";
export default function Footer() {
  return (
    <div className="footer bg-gray-300">
        <p className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
    </div>
  )
}
