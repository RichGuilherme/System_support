"use client";

import TicketStatsGroup from "./components/TicketStatsGroup";
import ExpiredGroup from "./components/ExpiredGroup";
import CommitmentsGroup from "./components/CommitmentsGroup";
import Pending from "./components/Pending";
import ReviewTicketsGroup from "./components/ReviewTicketsGroup";
import TicketsInProgress from "./components/TicketsInProgress";
import LastNotifications from "./components/LastNotifications";
import ScheduledActivities from "./components/ScheduledActivities";
import MyAppointedHours from "./components/MyAppointedHours";

const DashboardTickets = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <TicketStatsGroup />

      <div className="flex gap-4">
        <div className="w-full space-y-5">
          <TicketsInProgress />
          <ReviewTicketsGroup />
          <LastNotifications />
        </div>

        <div className="flex w-full flex-col flex-wrap gap-y-4">
          <ExpiredGroup />
          <MyAppointedHours />
          <CommitmentsGroup />
          <Pending />
          <ScheduledActivities />
        </div>
      </div>
    </div>
  );
};

export default DashboardTickets;
