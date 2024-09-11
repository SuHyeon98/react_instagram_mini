import { day, month, monthDate } from "../../../../util/calander";

const FeedDate = () => {
  return (
    <div>
      {monthDate[month]} {day}
    </div>
  );
};

export default FeedDate;
