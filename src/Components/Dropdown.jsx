import React from 'react';
import './Dropdown.css'



const Dropdown = () => {
    return (
        


            <div className="col-md">
                <div className=" mb-3 mt-5">
                    <label htmlFor="inputPassword3" className="col col-form-label fw-bold">Select Stack</label>
                    <select className="form-select w-75" id="floatingSelectGrid" aria-label="Floating label select example"
                        name='track'  >
                        <option selected > Select your stack</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="FullStack">FullStack</option>
                        <option value="UI/UX">UI/UX</option>

                    </select>

                </div>



            </div>
            )
}

            export default Dropdown