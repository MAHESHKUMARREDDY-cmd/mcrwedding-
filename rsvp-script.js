/********************** Add to Calendar **********************/
var myCalendar = createCalendar({
    options: {
        class: '',
        // You can pass an ID. If you don't, one will be generated for you
        id: ''
    },
    data: {
        // Event title
        title: "Ram and Antara's Wedding",

        // Event start date
        start: new Date('JAN 02, 2024 10:00'),

        // Event duration (IN MINUTES)
        // duration: 120,

        // You can also choose to set an end time
        // If an end time is set, this will take precedence over duration
        end: new Date('Nov 29, 2030 00:00'),

        // Event Address
        address: 'ITC Fortune Park Hotel, Kolkata',

        // Event Description
        description: "We can't wait to see you on our big day. For any queries or issues, please contact Mr. Amit Roy at +91 9876543210."
    }
});

$('#add-to-cal').html(myCalendar);
