import FeedProfileImage from "../FeedTop/FeedProfileImage";

type FeedContetnsProps = {
  name?: string;
  contents?: string;
};

const FeedContetns = ({ name = "Unnamed", contents }: FeedContetnsProps) => {
  const people: number[] = [];

  const msg: { [key: number]: string } = { 0: ``, 1: `Like by ${people[0]}` };

  return (
    <div className="">
      <div className="flex items-center gap-2-">
        <FeedProfileImage src="man.png" />
        <span>
          {people.length === 0
            ? msg[0]
            : msg[people.length] ||
              `Like by ${people[0]} and ${people.length} orthers`}
        </span>
      </div>
      <div className="flex mr-3">
        <span className="font-bold">{name} </span>
        <span>{contents}</span>
      </div>
      <div>
        <span>today day</span>
      </div>
    </div>
  );
};

export default FeedContetns;
