import gdg from "../assets/images/gdg.png";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-96 relative">
        {/* Top-right small logo */}
        <img src={gdg} alt="gdg club logo" className="absolute top-4 right-4 w-12 h-12" />
        
        {/* Main centered logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="our website logo" className="w-24 h-24" />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800">HR MANAGER</h2>
        
        {/* Discord Login Button */}
        <div className="flex justify-center mt-8">
      <button className="flex items-center justify-center w-40 bg-blue-700 text-white px-4 py-3 rounded-xl shadow hover:bg-blue-800 transition gap-2">
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M38.9218 2.99173C36.0084 1.59709 32.854 0.584849 29.5682 0C29.5104 0.000845117 29.4553 0.0251008 29.4149 0.067483C29.0206 0.809791 28.5606 1.77704 28.2539 2.51935C24.7687 1.97983 21.2245 1.97983 17.7393 2.51935C17.4326 1.75455 16.9726 0.809791 16.5564 0.067483C16.5345 0.0224947 16.4688 0 16.4031 0C13.1173 0.584849 9.98482 1.59709 7.04951 2.99173C7.0276 2.99173 7.00569 3.01422 6.98379 3.03671C1.02553 12.1918 -0.617372 21.0995 0.193127 29.9173C0.193127 29.9622 0.215032 30.0072 0.258843 30.0297C4.20181 32.999 7.99144 34.7985 11.7373 35.9907C11.803 36.0132 11.8687 35.9907 11.8906 35.9457C12.7668 34.7085 13.5554 33.4039 14.2345 32.0317C14.2783 31.9417 14.2345 31.8518 14.1468 31.8293C12.8982 31.3344 11.7153 30.7495 10.5544 30.0747C10.4667 30.0297 10.4667 29.8948 10.5325 29.8273C10.7734 29.6473 11.0144 29.4449 11.2553 29.2649C11.2991 29.2199 11.3649 29.2199 11.4087 29.2424C18.9441 32.774 27.071 32.774 34.5188 29.2424C34.5626 29.2199 34.6284 29.2199 34.6722 29.2649C34.9131 29.4674 35.1541 29.6473 35.395 29.8498C35.4827 29.9173 35.4827 30.0522 35.3731 30.0972C34.2341 30.7945 33.0293 31.3569 31.7807 31.8518C31.693 31.8743 31.6711 31.9867 31.693 32.0542C32.394 33.4263 33.1826 34.731 34.0369 35.9682C34.1026 35.9907 34.1683 36.0132 34.2341 35.9907C38.0018 34.7985 41.7914 32.999 45.7344 30.0297C45.7782 30.0072 45.8001 29.9622 45.8001 29.9173C46.7639 19.7274 44.201 10.8872 39.0094 3.03671C38.9875 3.01422 38.9656 2.99173 38.9218 2.99173ZM15.3735 24.5411C13.1173 24.5411 11.2334 22.4042 11.2334 19.7724C11.2334 17.1406 13.0735 15.0036 15.3735 15.0036C17.6955 15.0036 19.5356 17.1631 19.5137 19.7724C19.5137 22.4042 17.6736 24.5411 15.3735 24.5411ZM30.6416 24.5411C28.3853 24.5411 26.5015 22.4042 26.5015 19.7724C26.5015 17.1406 28.3415 15.0036 30.6416 15.0036C32.9635 15.0036 34.8036 17.1631 34.7817 19.7724C34.7817 22.4042 32.9635 24.5411 30.6416 24.5411Z" fill="#F6F0D8"/>
          </svg>
          <span className="text-lg font-medium">Login</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
