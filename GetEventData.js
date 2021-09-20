const saveEventDataModle = (() => {
    return {
        submitForm: () => {
            const forms = document.getElementById("form");
            const eventData = forms.eventData.value
            const eventTitle = forms.eventTitle.value
            const eventComment = forms.eventComment.value

            let eventDates = {
                eventData: eventData,
                eventTitle: eventTitle,
                eventComment:  eventComment
            };

            if(eventDates.eventData && eventDates.eventTitle && eventDates.eventComment) {
                let eventDateLists = [];
                console.log(eventDates.length);
                for(let i = 0; i < eventDates.length; i++ ) {
                    console.log(i);
                    eventDateLists[i].push = ({
                        value: eventDates
                     });
                    
                }

                // localStorage.setItem("eventDateLists", JSON.stringify(eventDateLists));
            } else {
                const errorMessage = document.getElementById("error_message");
                errorMessage.textContent = "※入力がされていません。";
            }

            
        }

    //     saveEvent: () => {
    //         console.log(JSON.parse(localStorage.getItem("eventDates")));

           
    //         // const submitFormEvent = JSON.parse(localStorage.getItem("eventDates"));

    //         // if (submitFormEvent) {
    //         //     const events = [];
    //         //     events.push({
    //         //         text: eventDates
    //         //     });

    //         //     localStorage.setItem("events", JSON.stringify(events));

    //         //     const eventList = document.getElementById("eventList");
    //         //     eventList.textContent = '入力されています';
    //         // };
        
    // },

    }
})();
