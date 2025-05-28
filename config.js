var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoiam1hcnRpbnRyYWlub3IiLCJhIjoiY2x2bXliYWhvMDducjJsbnh1dWh0YnJqbiJ9.fsYJqNlqMq492wAcRCTxMg',
    showMarkers: false,
    markerColor: '#000000',
    inset: true,
    theme: 'light',
    use3dTerrain: false, 
    auto: false,
    chapters: [
        {
            id: 'iowa',
            alignment: 'right',
            hidden: false,
            title: 'The Midwest as a hub for immigration',
            description: 'Over the past several decades, the Midwest in particual has become a hotbed for immigration. As it stands, around 11&#37; of Black immigrants in the U.S. live in the Midwest. Our storytellers followed three different families from three different African countries, working to understand their journeys across the globe.',
            location: {
                center: [-39.43915, 26.44918],
                zoom: 2.15,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'liberia',
            alignment: 'left',
            hidden: false,
            title: 'Liberia',
            description: 'Darius and Wealee Nupolu immigrated from Liberia and now live in Iowa. The population is approximately 5.4 million, and the average age is rather young at around 17.9 years old.',
            location: {
                center: [-9.29426, 6.43569],
                zoom: 7.10,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'togo',
            alignment: 'left',
            hidden: false,
            title: 'Togo',
            description: 'Wazy Sati and Essonia Algea immigrated to Iowa from Togo. Togo gained independence from France in 1960, and French is still the country&#39s official language.',
            location: {
                center: [1.03541, 8.74474],
                zoom: 6.55,
                pitch: 45.00,
                bearing: -40.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'democratic republic of the congo',
            alignment: 'left',
            hidden: false,
            title: 'Democratic Republic of the Congo',
            description: 'Daniel and Dodo Batigue immigrated from the Democratic Republic of the Congo. The population sits at around 111 million, and the most commonly used langauges are French, Kituba, Lingala, Swahili, and Tshiluba.',
            location: {
                center: [22.95954, -1.12716],
                zoom: 5.12,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cedar-rapids',
            alignment: 'right',
            hidden: false,
            title: 'Cedar Rapids',
            description: 'The state of Iowa and Cedar Rapids, in particular, have a rich history of welcoming immigrants dating back to the Vietnam War. Over the past few years, immigrants have accounted for around half of the county&#39s population growth. The three families our storytellers were embedded with all settled in the Cedar Rapids area, establishing community ties.',
            location: {
                center: [-91.66866, 41.97614],
                zoom: 10.82,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
}
