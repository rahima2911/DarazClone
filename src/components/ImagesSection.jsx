// src/components/ImagesSection.jsx

import heroMain from '../assets/images/hero-main.jpg';
import sub1 from '../assets/images/sub-1.jpg';
import sub2 from '../assets/images/sub-2.jpg';
import sub3 from '../assets/images/sub-3.jpg';
import sub4 from '../assets/images/sub-4.jpg';

export default function ImagesSection() {
  return (
    <div className="w-full">

      {/* Main Hero Banner */}
      <div className="w-full">
        <img
          src={heroMain}
          alt="Hero Main"
          className="w-full object-cover"
        />
      </div>

      {/* Sub Banners */}
      <div className="bg-white px-10 py-6">
        <div className="flex flex-col space-y-6">
          {/* Image 1 */}
          <img
            src={sub1}
            alt="Sub Banner 1"
            className="w-full object-cover rounded"
          />

          {/* Image 2 */}
          <img
            src={sub2}
            alt="Sub Banner 2"
            className="w-full object-cover rounded"
          />

          {/* Image 3 */}
          <img
            src={sub3}
            alt="Sub Banner 3"
            className="w-full object-cover rounded"
          />

          {/* Image 4 */}
          <img
            src={sub4}
            alt="Sub Banner 4"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
