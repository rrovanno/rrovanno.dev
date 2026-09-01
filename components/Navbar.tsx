import CursorTarget from "@/components/cursor/CursorTarget";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between">
      <CursorTarget>
<CursorTarget>
  <a 
    href="#home"
    className="font-semibold tracking-wide text-xl"
  >
    rrovanno
  </a>
</CursorTarget>
      </CursorTarget>

      <div className="flex gap-6">
        <CursorTarget shift>
          <a href="#about">
            About
          </a>
        </CursorTarget>

        <CursorTarget shift>
          <a href="#projects">
            Projects
          </a>
        </CursorTarget>

        <CursorTarget shift>
          <a href="#contact">
            Contact
          </a>
        </CursorTarget>
      </div>
    </nav>
  );
}