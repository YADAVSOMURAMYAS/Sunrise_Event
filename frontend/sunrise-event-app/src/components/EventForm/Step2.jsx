const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Contact Information</h2>
  
        <div className="form-control">
          <label className="label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="input input-bordered"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="input input-bordered"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">Preferred Contact Method</label>
          <select
            name="preferredContact"
            className="select select-bordered"
            value={formData.preferredContact}
            onChange={handleChange}
          >
            <option value="email">Email</option>
            <option value="call">Call</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
  
        <div className="flex justify-between mt-4">
          <button className="btn btn-secondary" onClick={prevStep}>Back</button>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Step2;
  