const saveEventDataModle = (() => {
    return {
        submitForm: () => {            
            const forms = document.getElementById("form");
            const eventData = forms.eventData.value;
            const eventTitle = forms.eventTitle.value;
            const eventComment = forms.eventComment.value;
            const errorMessage = document.getElementById("error_message");

            let formEventData = { 
                eventdata: eventData,
                eventtitle: eventTitle, 
                eventComment: eventComment
            }

            // localStorageに値があるか確認
            if ( localStorage.getItem('eventdata') == null ) {
                localStorage.setItem('eventdata', '[]');
            }

            // formに入力されているか確認
           if ( eventData == "" || eventTitle == "" || eventComment == "") {
                errorMessage.textContent = "※入力がされていません。";
           } else {
                errorMessage.textContent = "";
                
                let saveEventData = JSON.parse(localStorage.getItem('eventdata', '[]'));
                saveEventData.push( formEventData );
                localStorage.setItem('eventdata', JSON.stringify(saveEventData));
           }
        }
    }
})();
