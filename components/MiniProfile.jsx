const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81119367_180833642971267_6901131851822268416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1l4AibOocnEPSxrBafps1XuEIe1dx-1Be4Qh7V3H7UNzTONhZJ_umPUBDtOgbslZTx41H1B_VkDlD_SyZcRln&_nc_ohc=sb-EJ16Oy_8AX-Prpa8&_nc_oc=AQn9MRlqK8vrkO1eqKwhRN5Gvb_9n9O9RC6KUaCX50Oekbad_766qtpLpehMU9Gvy3Q&tn=14moef0so3wb2XL5&_nc_ht=scontent-mxp1-1.xx&oh=10af5d03832d63dd8515527039bf9b74&oe=619E3185"
        alr="profile pic"
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Elliop</h2>
        <h3 className="text-sm text-gray-400">Welcome to Camagru</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;
