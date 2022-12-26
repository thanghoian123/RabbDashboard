import {
  DateSelectArg, EventApi, EventClickArg
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import {
  Box, Typography,
  useTheme
} from "@mui/material";
import { memo, useState } from "react";
import Header from "../../components/header";
import { EMode, tokens } from "../../theme";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
const Calendar = memo(() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleEventClick = (arg: EventClickArg) => {
    console.log("🚀 ~ file: index.tsx:9 ~ handleEventClick ~ arg", arg);
    // bind with an arrow function
    alert(arg.event);
  };

  const handleDateClick = (selected: DateSelectArg) => {
    console.log(
      "🚀 ~ file: index.tsx:18 ~ handleDateClick ~ selected",
      selected
    );
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  return (
    <Box m="20px">
      <Header title="Calendar" />
      <Box display="flex" justifyContent="space-between">
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: "4px",
            m: "15px",
            flex: "1 1 20%",
          }}
        >
          <Typography variant="h5">Events</Typography>

          {/* <List>
            {currentEvents.map((event) => (
              <ListItem>
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start as Date, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List> */}
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            events={[
              { title: "event 1", date: "2022-12-01" },
              { title: "event 2", date: "2022-12-02" },
            ]}
            initialView="dayGridMonth"
            eventClick={handleEventClick}
            eventsSet={(events) => {
              console.log(events);
              // setCurrentEvents([...events])
            }}
            select={handleDateClick}
            dayMaxEvents
            editable
            selectable
          />
        </Box>
      </Box>
    </Box>
  );
});

export default Calendar;
