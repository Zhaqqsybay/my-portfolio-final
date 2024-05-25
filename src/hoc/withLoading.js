import React, { useState, useEffect } from 'react';

const withLoading = (WrappedComponent, fetchFunction) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchFunction().then(response => {
        setData(response);
        setLoading(false);
      });
    }, []);

    return loading ? <div>Loading...</div> : <WrappedComponent {...props} data={data} />;
  };
};

export default withLoading;