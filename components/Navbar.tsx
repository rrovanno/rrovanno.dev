import CursorTarget from "@/components/cursor/CursorTarget";

export default function Navbar() {
  return (
    <nav
  className="
    fixed
    top-0
    z-[100]
    flex
    w-full
    justify-between
    p-6

    bg-background/70
    backdrop-blur-xl
    border-b
    border-foreground/10

    md:bg-transparent
    md:backdrop-blur-none
    md:border-transparent
  "
>
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