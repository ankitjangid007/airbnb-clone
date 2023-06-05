"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className="px-4 py-3 font-semibold phandleClickx-4 hover:bg-neutral-100"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
