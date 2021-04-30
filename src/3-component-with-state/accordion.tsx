import { DetailedHTMLProps, HTMLProps, useEffect, useRef, useState } from "react"


export default function Accordion(props: DetailedHTMLProps<HTMLProps<HTMLElement>, HTMLElement>) {
  const [open, setOpen] = useState(false);
  const content_ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (content_ref.current === null) return;

    const new_height = open ? content_ref.current.scrollHeight : 1;
    content_ref.current.style.maxHeight = `${new_height}px`;
  }, [content_ref, open]);

  return (
    <div>
      <button
        id="accordion-trigger"
        aria-controls="accordion-content"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        Trigger
      </button>
      <section
        {...props}
        ref={content_ref}
        id="accordion-content"
        aria-labelledby="accordion-trigger"
      >
        <div style={{
          height: 300,
          width: 300
        }} />
      </section>
    </div>
  )
}
