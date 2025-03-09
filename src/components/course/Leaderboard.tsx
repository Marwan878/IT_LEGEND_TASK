import RoundButton from "../general/RoundButton";

function Leaderboard({
  courseName,
  studentBeats,
  data,
  setLeaderboardIsOpen,
}: {
  courseName: string;
  studentBeats: number;
  data: any[];
  setLeaderboardIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let emoji, message1, message2;

  if (studentBeats < 50) {
    emoji = "🤦‍♂️";
    message1 = "محتاج تحسن مستواك";
    message2 = "ممكن تحاول مرة تانية";
  } else if (studentBeats < 100) {
    emoji = "💪";
    message1 = "عظيم يا صديقي";
    message2 = "كمل عايز أشوف اسمك في الليدر بورد هنا";
  } else {
    emoji = "🏆";
    message1 = "أنت الأفضل";
    message2 = "ممتاز! ليك مستقبل باهر";
  }

  return (
    <>
      <RoundButton
        className="right-10 top-10 z-[10000]"
        onClick={() => setLeaderboardIsOpen(false)}
      />

      <div className="text-[#080264] my-6 max-w-md mx-auto rounded-2xl overflow-hidden border animate-fade-in">
        <div className="p-6 pb-4">
          <h2 className="text-center text-lg font-base text-[#190f85] mb-1">
            {courseName}
          </h2>
          <h3 className="text-center font-bold mb-4">Leaderboard</h3>

          <div className="bg-[#f5f9fa] p-4 rounded-xl mb-6 relative overflow-hidden">
            <div className="relative z-10 flex">
              <div style={{ direction: "rtl" }} className="flex justify-end">
                <span className="me-4 shrink-0 text-[3.125rem]">{emoji}</span>
                <p className="text-[#182578] font-light mb-2">
                  {message1 +
                    ".." +
                    `
                    أداءك في الكورس ده أفضل من ${studentBeats}% من باقي الطلبة` +
                    ".. " +
                    message2}
                </p>
              </div>
            </div>
          </div>

          <ol className="space-y-6 p-6 bg-[#f5f9fa] rounded-lg">
            {data.map((item, index) => (
              <li className="border rounded-sm bg-white h-20"></li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
