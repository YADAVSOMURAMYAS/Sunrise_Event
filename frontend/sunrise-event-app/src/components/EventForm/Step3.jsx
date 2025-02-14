const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, name]
          : formData.services.filter((service) => service !== name),
      });
    };
  
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Event Requirements</h2>
  
        <div className="form-control">
          <label className="label">Venue Status</label>
          <select
            name="venueStatus"
            className="select select-bordered"
            value={formData.venueStatus}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="booked">Already Booked</option>
            <option value="need help">Need Help Booking</option>
          </select>
        </div>
  
        <div className="form-control">
          <label className="label">Special Requests</label>
          <textarea
            name="specialRequests"
            className="textarea textarea-bordered"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requirements..."
          ></textarea>
        </div>
  
        <div className="form-control">
          <label className="label">Services Required</label>
          <div className="flex flex-wrap gap-2">
            {["Catering", "Photography", "Decorations", "Music"].map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={service}
                  checked={formData.services.includes(service)}
                  onChange={handleCheckboxChange}
                />
                {service}
              </label>
            ))}
          </div>
        </div>
  
        <div className="flex justify-between mt-4">
          <button className="btn btn-secondary" onClick={prevStep}>Back</button>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Step3;
  