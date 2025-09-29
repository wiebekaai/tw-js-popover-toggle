import "./style.css";

console.log("hi");

if (!customElements.get("link-button")) {
  customElements.define(
    "link-button",
    class LinkButton extends HTMLElement {
      connectedCallback() {
        this.firstElementChild.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("popovertarget");

          if (id) {
            const popover = document.getElementById(id);

            if (popover) {
              e.preventDefault();
              popover.togglePopover();
            }
          }
        });
      }
    },
  );
}
