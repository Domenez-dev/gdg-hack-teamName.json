### RH Manager:

A platform to gather all resources and sheets that HR needs at the end of the month on a single page.

This platform contains details for each GDG member such as contributions, participation, initiative, bad attitude, badges, and Discord roles.

We integrate a bot to gather different APIs from Discord and data from organizers' sheets, and display this data to HR:

### Member Profile

- **Contributions**: Co-managers have different sheets each month that contain different department members and their tasks. Using the attribute `Task Status`, we can determine if the member has completed their task, which counts as a contribution.
- **Participation**: Using the event Accepted Members Form and event check-ins sheet to track if a member participated.
- **Initiative**: When a member wants to participate or contribute but does not get accepted.
- **Badges**: For example, Member of the Month for November 2024.
- **Roles**: Discord roles, with buttons to take actions.
- **Monthly Score**: Calculated with an algorithm using weighted criteria.
- **Engagement Zone**: Active / Inactive / On and Off.

### Automated Actions:

- Gather monthly task sheets from the club Drive.
- Gather contributions from task sheets.
- Take actions on members' roles.
- Automatically create roles and channels for new events and projects.
- Create a priority counter for active members to be selected in future events or projects.
- Count members' monthly scores to select the Member of the Month.
- Template feedback sender button.
- AI to determine contributions and task weights.

### Features:

- **Leaderboard**: Displays top contributors and participants to foster healthy competition.
- **Predictive Attrition Analysis**: Uses AI to predict potential attrition risks based on participation patterns, communication sentiment, and engagement levels.
