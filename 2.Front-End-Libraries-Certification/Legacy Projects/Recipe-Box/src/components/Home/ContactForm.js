import React from "react";

export default function ContactForm() {
  return (
    <div className="container">
      <h3 class="display-3 text-center">Book a Table</h3>
      <h3 class="display-4 text-center">Make Reservation</h3>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Your name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="Date">Date</label>
                <input type="date" class="form-control" id="Date" />
              </div>

              <div class="form-group col-md-6">
                <label for="phone">Phone</label>
                <input
                  type="phone"
                  class="form-control"
                  id="phone"
                  placeholder="phone"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="time"
                  class="form-control"
                  id="inputAddress2"
                  min="09:00"
                  max="18:00"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
            </div>


      
           
            <button type="submit" class="btn btn-primary">
              Make a Reservation
            </button>


          </form>
        </div>
      </div>
    </div>
  );
}
