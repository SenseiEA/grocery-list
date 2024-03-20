import React from "react";

function Footer({ items }) {
  let itemCount = items.length;
  let itemObtainedCount = items.filter((item) => item.isChecked).length;
  let percentage =
    itemCount > 0 ? Math.round((itemObtainedCount / itemCount) * 100) : 0;
  console.log(itemCount);
  console.log(itemObtainedCount);
  return (
    <div className="footer">
      <span>
        <p>
          You have {itemCount} items in your list, and you already completed{" "}
          {itemObtainedCount}, {percentage}%
        </p>
      </span>
    </div>
  );
}

export default Footer;
