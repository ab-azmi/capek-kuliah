import React from "react";

const UpdateHistory = ({history}: {history: {
    date: string;
    description: string;
    thanksTo: string;
    thanksToEmail: string;
  }}) => {
  return (
    <div className="">
      <div className="bg-secondary rounded-r-lg rounded-tl-lg p-3 w-fit text-sm max-w-[90%]">
        <div className="text-sm mb-3">
            <span className="text-slate-500">Thanks to</span> {" "}
            <a
            href={`mailto:${history.thanksToEmail}`}
            className="text-blue-500 font-semibold hover:underline"
            >
                {history.thanksTo}
            </a>
        </div>
        <p className="text-base">{history.description}</p>
        <p className="text-xs text-gray-500 mt-1 text-right">{history.date}</p>
      </div>
    </div>
  );
};

export default UpdateHistory;
