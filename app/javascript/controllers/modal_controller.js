import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

// Connects to data-controller="modal"
export default class extends Controller {
  connect() { 
  }

  close() {
    location.reload();
  }
}
