
export const data_Pei = [
  ["Age Group", "Percentage"],
  ["5-25", 49],     // Replace 30 with the actual percentage for this group
  ["25-40", 35],     // Replace 15 with the actual percentage for this group
  ["45+", 16],       // Replace 35 with the actual percentage for this group
];

export const options_Pei = {
  is3D: true,
  colors: ['#001C30','#176B87' , '#64CCC5'],
  legend: { position: "bottom" },
};



export const data_bar = [
    ["Years", "Patients", "َAddicted", "unaddicted"],
    ["2021", 1000, 800, 200],
    ["2022", 1200, 700, 500],
    ["2023", 660, 420, 240],
  ];
  
  export const options_bar = {
    colors: ['#001C30', '#64CCC5', '#176B87'],
  };

  export const topDoctorsData = [
    ["Top" ,"Name", "Rating Of 05" , "Nbr_Patients"],
    [ 1,"Dr. Mensour",  4.8  , 504],
    [ 2,"Dr. Oussama",  4.7 ,489],
    [ 3,"Dr. Ilyes", 4.5 ,411],
    [ 4,"Dr. Kacem", 4.3 ,367],
    [ 5,"Dr. Yassine", 4.1 ,312],
    // Add more doctor data as needed
  ];

  // Google Chart options
  export const chartOptions = {
    title: "Top Doctors",
    legend: "none",
    colors: ["blue"],
    hAxis: {
      title: "Rating",
    },
  };
 
  export const data_Gei = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];
 export const options_Gei = {
    colorAxis: { colors: ['#DAFFFB', '#64CCC5', '#176B87' ,'#001C30'] }, // Custom colors for regions
  };

  export const data_area = [
    ["Year", "Patient", "Doctor"],
    ["2020", 800, 200],
    ["2021", 1170, 460],
    ["2022", 1500, 500],
    ["2023", 1789, 540],
  ];
  export const options_area = {
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
    colors: [ '#176B87' ,'#001C30']
  };