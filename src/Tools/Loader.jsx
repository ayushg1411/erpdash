import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="backdrop"></div>
          <div className="sweet-loading">
            <SyncLoader
              color="#000"
              loading={loading}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Loader;
