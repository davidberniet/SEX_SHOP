import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["collectionContainer", "fieldPrototype"];

    connect() {
        this.index = this.collectionContainerTarget.children.length;
    }

    add(event) {
        event.preventDefault();

        // Get the prototype
        let prototype = this.fieldPrototypeTarget.dataset.prototype;
        // Replace the '__name__' placeholder
        let newField = prototype.replace(/__name__/g, this.index);

        // Create a new div to hold the field
        let newDiv = document.createElement('div');
        newDiv.innerHTML = newField;
        // Add a delete button to the new field
        this.addDeleteButton(newDiv);

        this.collectionContainerTarget.appendChild(newDiv);
        this.index++;
    }
    
    remove(event) {
        event.preventDefault();
        event.currentTarget.closest('[data-collection-item]').remove();
    }

    initialize() {
        // Add delete buttons to existing items
        this.collectionContainerTarget.querySelectorAll('[data-collection-item]').forEach((item) => {
            this.addDeleteButton(item);
        });
    }

    addDeleteButton(item) {
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.classList.add('bg-red-500', 'text-white', 'p-2', 'rounded', 'mt-2');
        removeButton.addEventListener('click', this.remove);
        item.appendChild(removeButton);
        item.setAttribute('data-collection-item', '');
    }
}
