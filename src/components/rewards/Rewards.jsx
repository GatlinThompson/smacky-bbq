import RewardItem from "./RewardItem";
const rewards = [
  {
    id: 1,
    title: "Birthday Bash",
    image: "../assets/rewards_1.png",
    alt: "white birthday cake with candles and pink frosting",
    desc: "Enjoy a free dessert or appetizer with the purchase of a main course during their birthday week.",
  },
  {
    id: 3,
    title: "Free Side",
    image: "../assets/rewards_2.png",
    alt: "buttery rolls stuck to each other",
    desc: "Enjoy a side with the purchase of a main course during their birthday week.",
  },
  {
    id: 4,
    title: "Student Discount Night",
    image: "../assets/rewards_3.png",
    alt: "graduation hats thrown in the air",
    desc: "Present your valid student ID and enjoy a 15%  discount off the total bill.",
  },
];
const Rewards = () => {
  return (
    <section className="reward">
      {rewards.map((reward) => (
        <RewardItem
          key={reward.id}
          image={reward.image}
          title={reward.title}
          desc={reward.desc}
          alt={reward.alt}
        />
      ))}
    </section>
  );
};

export default Rewards;
