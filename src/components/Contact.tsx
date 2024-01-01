const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-lg text-black text-opacity-80  font-sans">
        User Contact Details
      </h1>
      <center>
        <form className=" lg:w-8/12">
          <input
            className="border border-black border-opacity-40 p-2 m-2 w-6/12 bg-gray-200 rounded-lg"
            placeholder="enter user name"
          />
          <br />
          <input
            className="border border-black border-opacity-40  p-2 m-2 w-6/12 bg-gray-200 rounded-lg"
            placeholder="enter email address"
          />
          <br />
          <input
            className="border border-black border-opacity-40  p-2 m-2 w-6/12 bg-gray-200 rounded-lg"
            placeholder="enter phone number"
            type="number"
          />
          <br />
          <button className="bg-green-700 p-1 rounded-lg w-6/12 text-white">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
};

export default Contact;
