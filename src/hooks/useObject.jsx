const useObject = (object) => {
  const removeProps = (props) => {
    const newObject = { ...object };
    props.map((prop) => delete newObject[prop]);
    return newObject;
  };

  const includes = (key) => Object.keys(object).includes(key);

  return { removeProps, includes };
};

export default useObject;
