const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-5 p-5 text-center">
        This is Contact Us page🚀
      </h1>

      <form className="flex text justify-center">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black rounded-md p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
