import "./ArrayItem.css";

export default function ArrayItem(id) {
  return `
            <div class="array-item" id="array-item-${id}" style="order:${id}">
                ${id}
                array-item-${id}
            </div>
      `;
}
