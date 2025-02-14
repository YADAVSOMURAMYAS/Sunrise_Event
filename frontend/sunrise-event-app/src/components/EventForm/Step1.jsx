import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Event Details</h2>

      {/* Event Type */}
      <div className="form-control">
        <label className="label">Event Type</label>
        <select 
          name="eventType"
          className="select select-bordered"
          value={formData.eventType}
          onChange={handleChange}
        >
          <option value="">Select Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="corporate">Corporate</option>
        </select>
      </div>

      {/* Event Date */}
      <div className="form-control">
        <label className="label">Event Date</label>
        <input
          type="date"
          name="eventDate"
          className="input input-bordered"
          value={formData.eventDate}
          onChange={handleChange}
        />
      </div>

      {/* Location */}
      <div className="form-control">
        <label className="label">Location</label>
        <input
          type="text"
          name="location"
          className="input input-bordered"
          placeholder="Enter event location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      {/* Guest Count */}
      <div className="form-control">
        <label className="label">Guest Count</label>
        <input
          type="number"
          name="guestCount"
          className="input input-bordered"
          placeholder="Enter number of guests"
          value={formData.guestCount}
          onChange={handleChange}
        />
      </div>

      {/* Budget Range */}
      <div className="form-control">
        <label className="label">Budget Range</label>
        <select 
          name="budgetRange"
          className="select select-bordered"
          value={formData.budgetRange}
          onChange={handleChange}
        >
          <option value="">Select Budget Range</option>
          <option value="low">Low (₹10,000 - ₹50,000)</option>
          <option value="medium">Medium (₹50,000 - ₹2,00,000)</option>
          <option value="high">High (₹2,00,000+)</option>
        </select>
      </div>

      {/* Next Button */}
      <button className="btn btn-primary" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
