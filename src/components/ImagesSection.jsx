export default function ImagesSection() {
  return (
    <div className="w-full">

      {/* Main Hero Banner */}
      <div className="w-full">
        <img
          src="/images/hero-main.jpg"
          alt="Hero Main"
          className="w-full object-cover"
        />
      </div>

      {/* Sub Banners */}
      <div className="bg-white px-10 py-6">
        <div className="flex flex-col space-y-6">
          {/* Image 1 */}
          <img
            src="/images/sub-1.jpg"
            alt="Sub Banner 1"
            className="w-full object-cover rounded"
          />

          {/* Image 2 */}
          <img
            src="/images/sub-2.jpg"
            alt="Sub Banner 2"
            className="w-full object-cover rounded"
          />

          {/* Image 3 */}
          <img
            src="/images/sub-3.jpg"
            alt="Sub Banner 3"
            className="w-full object-cover rounded"
          />

          {/* Image 4 */}
          <img
            src="/images/sub-4.jpg"
            alt="Sub Banner 4"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
