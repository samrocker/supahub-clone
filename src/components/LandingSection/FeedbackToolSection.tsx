import React from "react";
import { FeaturesMarquee } from "../reuseable/FeaturesMarquee";
import RoadmapCard from "../reuseable/RoadmapCard";
import GridContentCard from "../reuseable/GridContentCard";

const FeedbackToolSection = () => {
  return (
    <section>
      <main className="max-w-[1200px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-5">
          <div className="py-10 w-full flex-center flex-col gap-5">
            <span className="text-[#862FE7] text-sm lg:text-lg font-bold uppercase">
              Feedback tool features
            </span>
            <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold text-center max-w-[650px]">
              See all features
            </h1>
            <p className="text-[#3F4654] text-xs md:text-sm lg:text-lg font-semibold text-center max-w-[571px]">
              All the features of product feedback tool you need to easily
              centralize product feedback from your customers and use that
              feedback to build better products.
            </p>
          </div>
          <div className="py-10 w-full flex-center">
            <FeaturesMarquee />
          </div>
          <div className="py-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <RoadmapCard
              title="Set boards privacy"
              description="You can control board privacy, allowing you to control who sees the feedback."
              imageUrl="/images/grid-image-4.png"
            />
            <RoadmapCard
              title="Feature prioritization"
              description="Use the data that you've collected on user behavior, customer feedback and feature requests."
              imageUrl="/images/grid-image-5.png"
            />
            <RoadmapCard
              title="Merge duplicate posts"
              description="Spot duplicates and merge them together so that your team doesn't have to waste time reading through the same post twice."
              imageUrl="/images/grid-image-6.png"
            />
          </div>
          <div className="py-10 w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            <GridContentCard
              title="Link feedback to customers"
              description="Automatically fetch the right customer or create a new one."
              imageUrl="/icons/grid-icon-1.png"
            />
            <GridContentCard
              title="Upvotes & Downvotes"
              description="Votes helps you see which feedback is popular among your users."
              imageUrl="/icons/grid-icon-2.png"
            />
            <GridContentCard
              title="Subscribe users for updates"
              description="Let users subscribe for updates and get notified when there's an update."
              imageUrl="/icons/grid-icon-3.png"
            />
            <GridContentCard
              title="Post on behalf"
              description="Allows your customer support team to post on behalf of your users."
              imageUrl="/icons/grid-icon-4.png"
            />
            <GridContentCard
              title="Hide posts"
              description="Hide posts if they're not relevant to your product."
              imageUrl="/icons/grid-icon-5.png"
            />
            <GridContentCard
              title="Pin posts & comments"
              description="Pin posts and comments so they stay at the top of your board!"
              imageUrl="/icons/grid-icon-6.png"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default FeedbackToolSection;
