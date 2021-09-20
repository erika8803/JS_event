const saveEventDataModle = (() => {
    return {
        submitForm: () => {
            const forms = document.getElementById("form");
            const eventData = forms.eventData.value
            const eventTitle = forms.eventTitle.value
            const eventComment = forms.eventComment.value

            // ローカルステージから取り出し
            const localEventDatelist = JSON.parse(localStorage.getItem("eventDatelist"));
            console.log(localEventDatelist);

            eventDates = [
                { eventData: eventData, eventTitle: eventTitle, eventComment: eventComment }
            ];

            if(eventDates) {
                let eventDatelist = [];
                eventDates.forEach((value, index) => {
                    eventDatelist.push(value);
    
                    // ローカルストレージへ保存
                    localStorage.setItem("eventDatelist", JSON.stringify(eventDatelist));
                });
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
