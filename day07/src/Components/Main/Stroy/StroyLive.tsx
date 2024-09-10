export type StoryLivePorps = {
  isLive?: boolean;
};

const StoryLive = ({ isLive = false }: StoryLivePorps) => {
  if (!isLive) return <div></div>;
  return (
    <div
      className="absolute bottom-4 font-bold text-white border-2 border-white rounded-lg"
      style={{
        padding: "3px 4px",
        fontSize: "8px",
        backgroundColor: "#d91a46",
      }}
    >
      LIVE
    </div>
  );
};

export default StoryLive;
