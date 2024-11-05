function generateRandomNumber(min, max, decimals = 0) {
    const num = Math.random() * (max - min) + min;
    return Number(num.toFixed(decimals));
}

function formatNumber(num) {
    return Math.round(num * 100) / 100;
}

// Ejercicios Para mostrar en el DOM
const exerciseTemplatesDensidad = [0, 
    {
        template: (mass, volume) => ({
            question: `Un cubo metálico tiene una masa de ${mass} gramos y un volumen de ${volume} centímetros cúbicos. Calcula su densidad.`,
            hint: `Resultado: ${formatNumber(mass/volume)} g/cm³`,
            solution: [
                "Identificamos los datos del problema:",
                `- Masa (m) = ${mass} g\n- Volumen (V) = ${volume} cm³`,
                "Aplicamos la fórmula de densidad: \\[ \\rho = \\frac{m}{V} \\]",
                `Sustituimos los valores: \\[ \\rho = \\frac{${mass}\\text{ g}}{${volume}\\text{ cm}^3} \\]`,
                `La densidad del cubo es ${formatNumber(mass/volume)} g/cm³`
            ]
        }),
        generateValues: () => ({
            mass: generateRandomNumber(100, 500),
            volume: generateRandomNumber(20, 100)
        })
    },
    {
        template: (density, height, width, length) => {
            const volume = height * width * length;
            const mass = density * volume;
            return {
                question: `Una pieza rectangular de aluminio tiene las siguientes dimensiones: altura = ${height} cm, ancho = ${width} cm y largo = ${length} cm. Si su densidad es ${density} g/cm³, ¿cuál es su masa?`,
                hint: `Resultado: ${formatNumber(mass)} g`,
                solution: [
                    "Calculamos el volumen de la pieza rectangular:",
                    `- V = altura × ancho × largo\n- V = ${height} cm × ${width} cm × ${length} cm = ${volume} cm³`,
                    "Utilizamos la fórmula de densidad despejando la masa:\n\\[ m = \\rho \\times V \\]",
                    `Sustituimos los valores:\n\\[ m = ${density}\\text{ g/cm}^3 \\times ${volume}\\text{ cm}^3 \\]`,
                    `La masa de la pieza es ${formatNumber(mass)} g`
                ]
            };
        },
        generateValues: () => ({
            density: generateRandomNumber(2, 8, 1),
            height: generateRandomNumber(5, 15),
            width: generateRandomNumber(5, 15),
            length: generateRandomNumber(5, 15)
        })
    },
    {
        template: (mass, density) => {
            const volume = mass / density;
            return {
                question: `Un objeto tiene una masa de ${mass} g y una densidad de ${density} g/cm³. ¿Cuál es su volumen?`,
                hint: `Resultado: ${formatNumber(volume)} cm³`,
                solution: [
                    "Partimos de la fórmula de densidad y despejamos el volumen:",
                    "\\[ \\rho = \\frac{m}{V} \\rightarrow V = \\frac{m}{\\rho} \\]",
                    `Identificamos los datos:\n- Masa (m) = ${mass} g\n- Densidad (ρ) = ${density} g/cm³`,
                    `Sustituimos los valores: \\[ V = \\frac{${mass}\\text{ g}}{${density}\\text{ g/cm}^3} \\]`,
                    `El volumen del objeto es ${formatNumber(volume)} cm³`
                ]
            };
        },
        generateValues: () => ({
            mass: generateRandomNumber(200, 1000),
            density: generateRandomNumber(2, 10, 1)
        })
    },
    {
        template: (volume1, density1, density2) => {
            const mass1 = volume1 * density1;
            const volume2 = mass1 / density2;
            return {
                question: `Un líquido ocupa un volumen de ${volume1} cm³ y tiene una densidad de ${density1} g/cm³. Si transformamos este líquido en un gas con una densidad de ${density2} g/cm³, ¿qué volumen ocupará el gas?`,
                hint: `Resultado: ${formatNumber(volume2)} cm³`,
                solution: [
                    "Paso 1: Calculamos la masa del líquido inicial",
                    `- Usando \\( m = \\rho_1 \\times V_1 \\)\n- m = ${density1} g/cm³ × ${volume1} cm³ = ${formatNumber(mass1)} g`,
                    "Paso 2: La masa se conserva al cambiar de estado",
                    "Paso 3: Usamos la masa y la nueva densidad para calcular el volumen del gas",
                    `- Usando \\( V_2 = \\frac{m}{\\rho_2} \\)\n- V_2 = \\frac{${formatNumber(mass1)}\\text{ g}}{${density2}\\text{ g/cm}^3} = ${formatNumber(volume2)} cm³`,
                    `El gas ocupará un volumen de ${formatNumber(volume2)} cm³`
                ]
            };
        },
        generateValues: () => ({
            volume1: generateRandomNumber(100, 500),
            density1: generateRandomNumber(0.8, 2, 1),
            density2: generateRandomNumber(0.001, 0.1, 3)
        })
    }
];

const exerciseTemplatesPesoEspecifi = [0, 
    // Peso Específico
    {
        template: (volume, weight) => ({
            question: `Un tanque contiene ${volume} m³ de un fluido con un peso total de ${weight} N. Calcular el peso específico del fluido.`,
            hint: `Resultado: ${formatNumber(weight/volume)} N/m³`,
            solution: [
                "Identificamos los datos del problema:",
                `- Volumen (V) = ${volume} m³\n- Peso total (W) = ${weight} N`,
                "Aplicamos la fórmula del peso específico: \\[ \\gamma = \\frac{W}{V} \\]",
                `Sustituimos los valores: \\[ \\gamma = \\frac{${weight}\\text{ N}}{${volume}\\text{ m}^3} \\]`,
                `El peso específico del fluido es ${formatNumber(weight/volume)} N/m³`
            ]
        }),
        generateValues: () => ({
            volume: generateRandomNumber(2, 10),
            weight: generateRandomNumber(20000, 50000)
        })
    },
    {
        template: (diameter, height, specificWeight) => {
            const radius = diameter/2;
            const volume = Math.PI * radius * radius * height;
            const weight = specificWeight * volume;
            return {
                question: `Determinar el peso de un líquido contenido en un recipiente cilíndrico de ${diameter} m de diámetro y ${height} m de altura, si el peso específico del líquido es ${specificWeight} N/m³.`,
                hint: `Resultado: ${formatNumber(weight)} N`,
                solution: [
                    "Paso 1: Calculamos el volumen del cilindro:",
                    `- V = πr²h = π(${diameter}/2)² × ${height}\n- V = ${formatNumber(volume)} m³`,
                    "Paso 2: Utilizamos la fórmula del peso específico despejando el peso:",
                    `\\[ W = \\gamma \\times V \\]`,
                    `Sustituimos: \\[ W = ${specificWeight}\\text{ N/m}^3 \\times ${formatNumber(volume)}\\text{ m}^3 \\]`,
                    `El peso del líquido es ${formatNumber(weight)} N`
                ]
            };
        },
        generateValues: () => ({
            diameter: generateRandomNumber(0.5, 2, 1),
            height: generateRandomNumber(1, 3, 1),
            specificWeight: generateRandomNumber(9000, 13000)
        })}
]

// Eje relación densidad peso especifico
const exerciseTemplatesRelacion = [0,
    // Relación Densidad-Peso Específico
    {
        template: (density, gravity) => {
            const specificWeight = density * gravity;
            return {
                question: `Calcular el peso específico de un fluido con densidad ${density} kg/m³. Considere g = ${gravity} m/s².`,
                hint: `Resultado: ${formatNumber(specificWeight)} N/m³`,
                solution: [
                    "Recordamos la relación entre peso específico y densidad:",
                    "\\[ \\gamma = \\rho \\times g \\]",
                    `Identificamos los datos:\n- Densidad (ρ) = ${density} kg/m³\n- g = ${gravity} m/s²`,
                    `Sustituimos los valores: \\[ \\gamma = ${density}\\text{ kg/m}^3 \\times ${gravity}\\text{ m/s}^2 \\]`,
                    `El peso específico es ${formatNumber(specificWeight)} N/m³`
                ]
            };
        },
        generateValues: () => ({
            density: generateRandomNumber(800, 1200),
            gravity: 9.81
        })
    },
    {
        template: (specificWeight, gravity) => {
            const density = specificWeight / gravity;
            return {
                question: `Un material tiene un peso específico de ${specificWeight} N/m³. Calcular su densidad considerando g = ${gravity} m/s².`,
                hint: `Resultado: ${formatNumber(density)} kg/m³`,
                solution: [
                    "Utilizamos la relación entre peso específico y densidad:",
                    "\\[ \\gamma = \\rho \\times g \\rightarrow \\rho = \\frac{\\gamma}{g} \\]",
                    `Identificamos los datos:\n- Peso específico (γ) = ${specificWeight} N/m³\n- g = ${gravity} m/s²`,
                    `Sustituimos los valores: \\[ \\rho = \\frac{${specificWeight}\\text{ N/m}^3}{${gravity}\\text{ m/s}^2} \\]`,
                    `La densidad del material es ${formatNumber(density)} kg/m³`
                ]
            };
        },
        generateValues: () => ({
            specificWeight: generateRandomNumber(50000, 80000),
            gravity: 9.81
        })
    }
]

// eje volumen especifico

const exerciseTemplatesVolumenEspecifico = [0,
    // Volumen Específico
{
    template: (mass, volume) => ({
        question: `Un gas ocupa un volumen de ${volume} m³ y tiene una masa de ${mass} kg. Calcule su volumen específico.`,
        hint: `Resultado: ${formatNumber(volume/mass)} m³/kg`,
        solution: [
            "El volumen específico es el inverso de la densidad y se calcula como:",
            "\\[ v = \\frac{V}{m} \\]",
            `Datos:\n- Volumen (V) = ${volume} m³\n- Masa (m) = ${mass} kg`,
            `Sustituyendo: \\[ v = \\frac{${volume}\\text{ m}^3}{${mass}\\text{ kg}} \\]`,
            `El volumen específico es ${formatNumber(volume/mass)} m³/kg`
        ]
    }),
    generateValues: () => ({
        mass: generateRandomNumber(2, 10, 1),
        volume: generateRandomNumber(5, 20, 1)
    })
},
{
    template: (pressure, temperature) => {
        // Para aire como gas ideal
        const R = 287; // J/(kg·K)
        const volEsp = (R * (temperature + 273.15)) / (pressure * 1000);
        return {
            question: `Determine el volumen específico del aire a ${temperature}°C y ${pressure} kPa, considerando el aire como gas ideal (R = 287 J/(kg·K)).`,
            hint: `Resultado: ${formatNumber(volEsp)} m³/kg`,
            solution: [
                "Para un gas ideal, el volumen específico se calcula con:",
                "\\[ v = \\frac{RT}{P} \\]",
                `Datos:\n- R = 287 J/(kg·K)\n- T = ${temperature + 273.15} K\n- P = ${pressure * 1000} Pa`,
                `Sustituyendo: \\[ v = \\frac{287 \\times ${temperature + 273.15}}{${pressure * 1000}} \\]`,
                `El volumen específico es ${formatNumber(volEsp)} m³/kg`
            ]
        };
    },
    generateValues: () => ({
        pressure: generateRandomNumber(100, 200), // kPa
        temperature: generateRandomNumber(20, 40) // °C
    })
}
]

const exerciseTemplatesDensidadRelativa = [0,
    // Densidad Relativa o Gravedad Específica
{
    template: (density) => {
        const waterDensity = 1000; // kg/m³
        const specificGravity = density / waterDensity;
        return {
            question: `Un líquido tiene una densidad de ${density} kg/m³. Calcule su gravedad específica respecto al agua (ρ_agua = 1000 kg/m³).`,
            hint: `Resultado: ${formatNumber(specificGravity)}`,
            solution: [
                "La gravedad específica se calcula como:",
                "\\[ SG = \\frac{\\rho_{sustancia}}{\\rho_{agua}} \\]",
                `Datos:\n- ρ_sustancia = ${density} kg/m³\n- ρ_agua = 1000 kg/m³`,
                `Sustituyendo: \\[ SG = \\frac{${density}}{1000} \\]`,
                `La gravedad específica es ${formatNumber(specificGravity)}`
            ]
        };
    },
    generateValues: () => ({
        density: generateRandomNumber(800, 1500)
    })
},
{
    template: (specificGravity, volume) => {
        const waterDensity = 1000; // kg/m³
        const mass = specificGravity * waterDensity * volume;
        return {
            question: `Un líquido tiene una gravedad específica de ${specificGravity}. Si ocupa un volumen de ${volume} m³, ¿cuál es su masa?`,
            hint: `Resultado: ${formatNumber(mass)} kg`,
            solution: [
                "Paso 1: Calculamos la densidad del líquido usando la gravedad específica:",
                `\\[ \\rho_{liquido} = SG \\times \\rho_{agua} = ${specificGravity} \\times 1000 = ${formatNumber(specificGravity * waterDensity)} \\text{ kg/m}^3 \\]`,
                "Paso 2: Calculamos la masa usando la densidad:",
                `\\[ m = \\rho \\times V = ${formatNumber(specificGravity * waterDensity)} \\times ${volume} \\]`,
                `La masa del líquido es ${formatNumber(mass)} kg`
            ]
        };
    },
    generateValues: () => ({
        specificGravity: generateRandomNumber(0.8, 1.5, 2),
        volume: generateRandomNumber(1, 5, 1)
    })
}
]

const exerciseTemplatesViscosiadad = [0,
    // Viscosidad de los Fluidos
{
    template: (force, area, velocity, height) => {
        const viscosity = (force * height) / (area * velocity);
        return {
            question: `Se requiere una fuerza de ${force} N para mover una placa de ${area} m² a una velocidad de ${velocity} m/s sobre una película de aceite de ${height} mm de espesor. Calcule la viscosidad dinámica del aceite.`,
            hint: `Resultado: ${formatNumber(viscosity)} Pa·s`,
            solution: [
                "La viscosidad dinámica se calcula usando la ley de Newton:",
                "\\[ \\mu = \\frac{F \\times h}{A \\times v} \\]",
                `Datos:\n- Fuerza (F) = ${force} N\n- Altura (h) = ${height/1000} m\n- Área (A) = ${area} m²\n- Velocidad (v) = ${velocity} m/s`,
                `Sustituyendo: \\[ \\mu = \\frac{${force} \\times ${height/1000}}{${area} \\times ${velocity}} \\]`,
                `La viscosidad dinámica es ${formatNumber(viscosity)} Pa·s`
            ]
        };
    },
    generateValues: () => ({
        force: generateRandomNumber(5, 15, 1),
        area: generateRandomNumber(0.1, 0.5, 2),
        velocity: generateRandomNumber(2, 5, 1),
        height: generateRandomNumber(0.5, 2, 1)
    })
},
{
    template: (dynamicViscosity, density) => {
        const kinematicViscosity = dynamicViscosity / density;
        return {
            question: `Un fluido tiene una viscosidad dinámica de ${dynamicViscosity} Pa·s y una densidad de ${density} kg/m³. Calcule su viscosidad cinemática.`,
            hint: `Resultado: ${formatNumber(kinematicViscosity)} m²/s`,
            solution: [
                "La viscosidad cinemática se relaciona con la dinámica mediante:",
                "\\[ \\nu = \\frac{\\mu}{\\rho} \\]",
                `Datos:\n- Viscosidad dinámica (μ) = ${dynamicViscosity} Pa·s\n- Densidad (ρ) = ${density} kg/m³`,
                `Sustituyendo: \\[ \\nu = \\frac{${dynamicViscosity}}{${density}} \\]`,
                `La viscosidad cinemática es ${formatNumber(kinematicViscosity)} m²/s`
            ]
        };
    },
    generateValues: () => ({
        dynamicViscosity: generateRandomNumber(0.001, 0.1, 3),
        density: generateRandomNumber(800, 1200)
    })
}

]

const exerciseTemplatesPresionAbsoluta= [0,
    // Presión Absoluta
{
    template: (depth, fluidDensity, atmosphericPressure) => {
        const g = 9.81;
        const hydrostaticPressure = fluidDensity * g * (depth/100);
        const absolutePressure = hydrostaticPressure + atmosphericPressure;
        return {
            question: `Un punto se encuentra a ${depth} cm de profundidad en un fluido de densidad ${fluidDensity} kg/m³. Si la presión atmosférica es ${atmosphericPressure} kPa, calcule la presión absoluta en ese punto.`,
            hint: `Resultado: ${formatNumber(absolutePressure/1000)} kPa`,
            solution: [
                "Paso 1: Calculamos la presión hidrostática:",
                `\\[ P_h = \\rho gh = ${fluidDensity} \\times 9.81 \\times ${depth/100} \\]`,
                `\\[ P_h = ${formatNumber(hydrostaticPressure)} \\text{ Pa} = ${formatNumber(hydrostaticPressure/1000)} \\text{ kPa} \\]`,
                "Paso 2: Sumamos la presión atmosférica para obtener la presión absoluta:",
                `\\[ P_{abs} = P_{atm} + P_h = ${atmosphericPressure} + ${formatNumber(hydrostaticPressure/1000)} \\]`,
                `La presión absoluta es ${formatNumber(absolutePressure/1000)} kPa`
            ]
        };
    },
    generateValues: () => ({
        depth: generateRandomNumber(50, 200),
        fluidDensity: generateRandomNumber(900, 1200),
        atmosphericPressure: 101.325
    })
},
{
    template: (gauge_pressure, atmospheric_pressure) => {
        const absolutePressure = gauge_pressure + atmospheric_pressure;
        return {
            question: `Un manómetro conectado a un tanque marca ${gauge_pressure} kPa. Si la presión atmosférica local es ${atmospheric_pressure} kPa, ¿cuál es la presión absoluta en el tanque?`,
            hint: `Resultado: ${formatNumber(absolutePressure)} kPa`,
            solution: [
                "La presión absoluta se calcula sumando la presión manométrica y la atmosférica:",
                "\\[ P_{abs} = P_{man} + P_{atm} \\]",
                `Datos:\n- Presión manométrica = ${gauge_pressure} kPa\n- Presión atmosférica = ${atmospheric_pressure} kPa`,
                `Sustituyendo: \\[ P_{abs} = ${gauge_pressure} + ${atmospheric_pressure} \\]`,
                `La presión absoluta es ${formatNumber(absolutePressure)} kPa`
            ]
        };
    },
    generateValues: () => ({
        gauge_pressure: generateRandomNumber(200, 500),
        atmospheric_pressure: 101.325
    })
}
]

const exerciseTemplatesPresionManometrica = [0,
    // Presión Manométrica
{
    template: (absolute_pressure, atmospheric_pressure) => {
        const gauge_pressure = absolute_pressure - atmospheric_pressure;
        return {
            question: `Un recipiente tiene una presión absoluta de ${absolute_pressure} kPa. Calcule la presión manométrica si la presión atmosférica es ${atmospheric_pressure} kPa.`,
            hint: `Resultado: ${formatNumber(gauge_pressure)} kPa`,
            solution: [
                "La presión manométrica es la diferencia entre la presión absoluta y la atmosférica:",
                "\\[ P_{man} = P_{abs} - P_{atm} \\]",
                `Datos:\n- Presión absoluta = ${absolute_pressure} kPa\n- Presión atmosférica = ${atmospheric_pressure} kPa`,
                `Sustituyendo: \\[ P_{man} = ${absolute_pressure} - ${atmospheric_pressure} \\]`,
                `La presión manométrica es ${formatNumber(gauge_pressure)} kPa`
            ]
        };
    },
    generateValues: () => ({
        absolute_pressure: generateRandomNumber(300, 600),
        atmospheric_pressure: 101.325
    })
},
{
    template: (height, fluidDensity) => {
        const g = 9.81;
        const gauge_pressure = (height/100) * fluidDensity * g;
        return {
            question: `Una columna de líquido de densidad ${fluidDensity} kg/m³ tiene una altura de ${height} cm. Calcule la presión manométrica en la base de la columna.`,
            hint: `Resultado: ${formatNumber(gauge_pressure/1000)} kPa`,
            solution: [
                "La presión manométrica en este caso es igual a la presión hidrostática:",
                "\\[ P_{man} = \\rho gh \\]",
                `Datos:\n- Densidad (ρ) = ${fluidDensity} kg/m³\n- Altura (h) = ${height/100} m\n- g = 9.81 m/s²`,
                `Sustituyendo: \\[ P_{man} = ${fluidDensity} \\times 9.81 \\times ${height/100} \\]`,
                `La presión manométrica es ${formatNumber(gauge_pressure/1000)} kPa`
            ]
        };
    },
    generateValues: () => ({
        height: generateRandomNumber(50, 200),
        fluidDensity: generateRandomNumber(900, 1200)
    })
}

]

const exerciseTemplatesPrinsipioPascal= [0,
   // Principio de Pascal
{
    template: (force1, area1, area2) => {
        const pressure = force1/area1;
        const force2 = pressure * area2;
        return {
            question: `En un sistema hidráulico, se aplica una fuerza de ${force1} N sobre un émbolo de área ${area1} cm². Si esta presión se transmite a un segundo émbolo de área ${area2} cm², ¿qué fuerza se generará en el segundo émbolo?`,
            hint: `Resultado: ${formatNumber(force2)} N`,
            solution: [
                "Paso 1: Calculamos la presión en el primer émbolo:",
                `\\[ P = \\frac{F_1}{A_1} = \\frac{${force1}}{${area1}} = ${formatNumber(pressure)} \\text{ N/cm}^2 \\]`,
                "Paso 2: Aplicamos el principio de Pascal (la presión es igual en todos los puntos):",
                `\\[ F_2 = P \\times A_2 = ${formatNumber(pressure)} \\times ${area2} \\]`,
                `La fuerza en el segundo émbolo es ${formatNumber(force2)} N`
            ]
        };
    },
    generateValues: () => ({
        force1: generateRandomNumber(100, 500),
        area1: generateRandomNumber(10, 30),
        area2: generateRandomNumber(40, 80)
    })
},
{
    template: (depth1, depth2, density) => {
        const g = 9.81;
        const pressure1 = density * g * depth1;
        const pressure2 = density * g * depth2;
        const pressureDiff = pressure2 - pressure1;
        return {
            question: `En un fluido de densidad ${density} kg/m³, compare la presión entre dos puntos que están a ${depth1} m y ${depth2} m de profundidad.`,
            hint: `Resultado: Diferencia de presión = ${formatNumber(pressureDiff/1000)} kPa`,
            solution: [
                "Paso 1: Calculamos la presión en el punto 1:",
                `\\[ P_1 = \\rho gh_1 = ${density} \\times 9.81 \\times ${depth1} = ${formatNumber(pressure1)} \\text{ Pa} \\]`,
                "Paso 2: Calculamos la presión en el punto 2:",
                `\\[ P_2 = \\rho gh_2 = ${density} \\times 9.81 \\times ${depth2} = ${formatNumber(pressure2)} \\text{ Pa} \\]`,
                "Paso 3: Calculamos la diferencia de presión:",
                `\\[ \\Delta P = P_2 - P_1 = ${formatNumber(pressureDiff)} \\text{ Pa} = ${formatNumber(pressureDiff/1000)} \\text{ kPa} \\]`,
                `La diferencia de presión entre los puntos es ${formatNumber(pressureDiff/1000)} kPa`
            ]
        };
    },
    generateValues: () => ({
        depth1: generateRandomNumber(1, 3, 1),
        depth2: generateRandomNumber(4, 6, 1),
        density: generateRandomNumber(900, 1200)
    })
}
]

const exerciseTemplatesPrensaHidraulica = [0,
    // Prensa Hidráulica
{
    template: (force1, diameter1, diameter2) => {
        const area1 = Math.PI * Math.pow(diameter1/2, 2);
        const area2 = Math.PI * Math.pow(diameter2/2, 2);
        const force2 = force1 * (area2/area1);
        return {
            question: `Una prensa hidráulica tiene un pistón pequeño de ${diameter1} cm de diámetro y un pistón grande de ${diameter2} cm de diámetro. Si se aplica una fuerza de ${force1} N en el pistón pequeño, ¿qué fuerza se obtendrá en el pistón grande?`,
            hint: `Resultado: ${formatNumber(force2)} N`,
            solution: [
                "Paso 1: Calculamos las áreas de ambos pistones:",
                `\\[ A_1 = \\pi r_1^2 = \\pi(${diameter1/2})^2 = ${formatNumber(area1)} \\text{ cm}^2 \\]`,
                `\\[ A_2 = \\pi r_2^2 = \\pi(${diameter2/2})^2 = ${formatNumber(area2)} \\text{ cm}^2 \\]`,
                "Paso 2: Aplicamos la ecuación de la prensa hidráulica:",
                `\\[ \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\rightarrow F_2 = F_1\\frac{A_2}{A_1} \\]`,
                `\\[ F_2 = ${force1} \\times \\frac{${formatNumber(area2)}}{${formatNumber(area1)}} \\]`,
                `La fuerza en el pistón grande será ${formatNumber(force2)} N`
            ]
        };
    },
    generateValues: () => ({
        force1: generateRandomNumber(100, 500),
        diameter1: generateRandomNumber(2, 5),
        diameter2: generateRandomNumber(15, 25)
    })
},
{
    template: (force2, distance1, diameter1, diameter2) => {
        const area1 = Math.PI * Math.pow(diameter1/2, 2);
        const area2 = Math.PI * Math.pow(diameter2/2, 2);
        const force1 = force2 * (area1/area2);
        const distance2 = distance1 * (area1/area2);
        return {
            question: `Una prensa hidráulica debe levantar ${force2} N. El pistón pequeño tiene ${diameter1} cm de diámetro y se mueve ${distance1} cm. Si el pistón grande tiene ${diameter2} cm de diámetro, calcule: a) la fuerza necesaria en el pistón pequeño, b) el desplazamiento del pistón grande.`,
            hint: `Resultados: a) ${formatNumber(force1)} N, b) ${formatNumber(distance2)} cm`,
            solution: [
                "Paso 1: Calculamos las áreas de los pistones:",
                `\\[ A_1 = \\pi(${diameter1/2})^2 = ${formatNumber(area1)} \\text{ cm}^2 \\]`,
                `\\[ A_2 = \\pi(${diameter2/2})^2 = ${formatNumber(area2)} \\text{ cm}^2 \\]`,
                "Paso 2: Calculamos la fuerza en el pistón pequeño:",
                `\\[ F_1 = F_2\\frac{A_1}{A_2} = ${force2} \\times \\frac{${formatNumber(area1)}}{${formatNumber(area2)}} = ${formatNumber(force1)} \\text{ N} \\]`,
                "Paso 3: Calculamos el desplazamiento del pistón grande usando el principio de conservación de trabajo:",
                `\\[ d_2 = d_1\\frac{A_1}{A_2} = ${distance1} \\times \\frac{${formatNumber(area1)}}{${formatNumber(area2)}} = ${formatNumber(distance2)} \\text{ cm} \\]`,
                `Resultados:\na) Fuerza necesaria: ${formatNumber(force1)} N\nb) Desplazamiento: ${formatNumber(distance2)} cm`
            ]
        };
    },
    generateValues: () => ({
        force2: generateRandomNumber(5000, 10000),
        distance1: generateRandomNumber(20, 40),
        diameter1: generateRandomNumber(2, 5),
        diameter2: generateRandomNumber(15, 25)
    })
}
]



const exerciseTemplatesCapilaridad = [0,
    // Capilaridad
{
    template: (diameter, surfaceTension, contactAngle, density) => {
        const g = 9.81;
        const radius = diameter/2000; // convertir a metros
        const height = (2 * surfaceTension * Math.cos(contactAngle * Math.PI/180))/(density * g * radius);
        return {
            question: `Un tubo capilar de vidrio de ${diameter} mm de diámetro se sumerge en agua. Si la tensión superficial del agua es ${surfaceTension} N/m, su densidad ${density} kg/m³ y el ángulo de contacto es ${contactAngle}°, calcule la altura de ascensión capilar.`,
            hint: `Resultado: ${formatNumber(height*1000)} mm`,
            solution: [
                "Utilizamos la ecuación de ascensión capilar:",
                "\\[ h = \\frac{2\\gamma \\cos\\theta}{\\rho gr} \\]",
                `Datos:\n- γ = ${surfaceTension} N/m\n- θ = ${contactAngle}°\n- ρ = ${density} kg/m³\n- r = ${formatNumber(radius)} m`,
                `Sustituyendo:\n\\[ h = \\frac{2 \\times ${surfaceTension} \\times \\cos(${contactAngle}°)}{${density} \\times 9.81 \\times ${formatNumber(radius)}} \\]`,
                `La altura de ascensión capilar es ${formatNumber(height*1000)} mm`
            ]
        };
    },
    generateValues: () => ({
        diameter: generateRandomNumber(0.5, 2, 1),
        surfaceTension: 0.072,
        contactAngle: generateRandomNumber(0, 30),
        density: 998
    })
},
{
    template: (height, radius, density) => {
        const g = 9.81;
        const surfaceTension = (height/1000 * density * g * radius/1000)/(2 * Math.cos(0));
        return {
            question: `Un líquido sube ${height} mm en un tubo capilar de ${radius} mm de radio. Si la densidad del líquido es ${density} kg/m³ y el ángulo de contacto es 0°, calcule la tensión superficial del líquido.`,
            hint: `Resultado: ${formatNumber(surfaceTension)} N/m`,
            solution: [
                "Despejamos la tensión superficial de la ecuación de ascensión capilar:",
                "\\[ \\gamma = \\frac{h\\rho gr}{2\\cos\\theta} \\]",
                `Datos:\n- h = ${height/1000} m\n- ρ = ${density} kg/m³\n- r = ${radius/1000} m\n- θ = 0°`,
                `Sustituyendo:\n\\[ \\gamma = \\frac{${height/1000} \\times ${density} \\times 9.81 \\times ${radius/1000}}{2 \\times \\cos(0°)} \\]`,
                `La tensión superficial del líquido es ${formatNumber(surfaceTension)} N/m`
            ]
        };
    },
    generateValues: () => ({
        height: generateRandomNumber(10, 30),
        radius: generateRandomNumber(0.2, 1, 1),
        density: generateRandomNumber(900, 1100)
    })
}
]


const exerciseTemplatesTensionSuperficial = [0,
   // Tensión Superficial
{
    template: (force, length) => {
        const surfaceTension = force/(2 * length/100);
        return {
            question: `Se mide la fuerza necesaria para mantener una película de líquido en un marco rectangular. Si la longitud del marco es ${length} cm y la fuerza medida es ${force} N, calcule la tensión superficial del líquido.`,
            hint: `Resultado: ${formatNumber(surfaceTension)} N/m`,
            solution: [
                "La tensión superficial se calcula como:",
                "\\[ \\gamma = \\frac{F}{2L} \\]",
                `Datos:\n- Fuerza (F) = ${force} N\n- Longitud (L) = ${length/100} m`,
                "El factor 2 aparece porque la película tiene dos superficies",
                `Sustituyendo:\n\\[ \\gamma = \\frac{${force}}{2 \\times ${length/100}} \\]`,
                `La tensión superficial es ${formatNumber(surfaceTension)} N/m`
            ]
        };
    },
    generateValues: () => ({
        force: generateRandomNumber(0.001, 0.01, 3),
        length: generateRandomNumber(5, 15)
    })
},
{
    template: (radius, surfaceTension) => {
        const pressure = 2 * surfaceTension / (radius/1000);
        return {
            question: `Una gota de agua con radio ${radius} mm tiene una tensión superficial de ${surfaceTension} N/m. Calcule la presión adicional dentro de la gota debido a la tensión superficial.`,
            hint: `Resultado: ${formatNumber(pressure)} Pa`,
            solution: [
                "La presión adicional debido a la tensión superficial en una gota esférica es:",
                "\\[ \\Delta P = \\frac{2\\gamma}{R} \\]",
                `Datos:\n- Tensión superficial (γ) = ${surfaceTension} N/m\n- Radio (R) = ${radius/1000} m`,
                `Sustituyendo:\n\\[ \\Delta P = \\frac{2 \\times ${surfaceTension}}{${radius/1000}} \\]`,
                `La presión adicional es ${formatNumber(pressure)} Pa`
            ]
        };
    },
    generateValues: () => ({
        radius: generateRandomNumber(0.5, 2, 1),
        surfaceTension: 0.072
    })
}

]


const exerciseTemplatesCaudal= [0,
    //Caudal
    {
        template: (diameter, velocity) => {
            const radius = diameter / 2;
            const area = Math.PI * radius * radius;
            const flow = area * velocity;
            return {
                question: `Por una tubería circular de ${diameter} cm de diámetro fluye agua a una velocidad de ${velocity} m/s. Calcule el caudal en m³/s.`,
                hint: `Resultado: ${formatNumber(flow/10000)} m³/s`,
                solution: [
                    "Identificamos los datos del problema:",
                    `- Diámetro (D) = ${diameter} cm = ${diameter/100} m\n- Velocidad (v) = ${velocity} m/s`,
                    "Calculamos el área de la sección transversal:\n\\[ A = \\pi r^2 = \\pi (\\frac{D}{2})^2 \\]",
                    `\\[ A = \\pi (\\frac{${diameter/100}}{2})^2 = ${formatNumber(area/10000)} \\text{ m}^2 \\]`,
                    "Aplicamos la fórmula del caudal: \\[ Q = A \\times v \\]",
                    `\\[ Q = ${formatNumber(area/10000)} \\times ${velocity} = ${formatNumber(flow/10000)} \\text{ m}^3/s \\]`,
                    `El caudal es ${formatNumber(flow/10000)} m³/s`
                ]
            };
        },
        generateValues: () => ({
            diameter: generateRandomNumber(5, 20),
            velocity: generateRandomNumber(1, 5, 1)
        })
    },
    {
        template: (flow, width, depth) => {
            const area = width * depth;
            const velocity = flow / area;
            return {
                question: `Un canal rectangular tiene ${width} m de ancho y una profundidad de agua de ${depth} m. Si el caudal que fluye es de ${flow} m³/s, ¿cuál es la velocidad media del agua?`,
                hint: `Resultado: ${formatNumber(velocity)} m/s`,
                solution: [
                    "Identificamos los datos:",
                    `- Caudal (Q) = ${flow} m³/s\n- Ancho (w) = ${width} m\n- Profundidad (h) = ${depth} m`,
                    "Calculamos el área de la sección transversal:\n\\[ A = w \\times h \\]",
                    `\\[ A = ${width} \\times ${depth} = ${formatNumber(area)} \\text{ m}^2 \\]`,
                    "Despejamos la velocidad de la ecuación del caudal:\n\\[ Q = A \\times v \\rightarrow v = \\frac{Q}{A} \\]",
                    `\\[ v = \\frac{${flow}}{${formatNumber(area)}} = ${formatNumber(velocity)} \\text{ m/s} \\]`,
                    `La velocidad media del agua es ${formatNumber(velocity)} m/s`
                ]
            };
        },
        generateValues: () => ({
            flow: generateRandomNumber(2, 10, 1),
            width: generateRandomNumber(2, 5, 1),
            depth: generateRandomNumber(1, 3, 1)
        })
    }
]


const exerciseTemplatesRapidezFlujoPeso = [0,
    //Rapidez de flujo de peso
{
    template: (density, velocity, diameter) => {
        const radius = diameter / 2 / 100; // convertir a metros
        const area = Math.PI * radius * radius;
        const massFlow = density * area * velocity;
        const weightFlow = massFlow * 9.81;
        return {
            question: `En una tubería circular de ${diameter} cm de diámetro fluye agua con densidad ${density} kg/m³ a una velocidad de ${velocity} m/s. Calcule la rapidez de flujo de peso en N/s.`,
            hint: `Resultado: ${formatNumber(weightFlow)} N/s`,
            solution: [
                "Identificamos los datos:",
                `- Densidad (ρ) = ${density} kg/m³\n- Diámetro (D) = ${diameter} cm = ${diameter/100} m\n- Velocidad (v) = ${velocity} m/s`,
                "Calculamos el área de la sección transversal:\n\\[ A = \\pi r^2 = \\pi (\\frac{D}{2})^2 \\]",
                `\\[ A = \\pi (\\frac{${diameter/100}}{2})^2 = ${formatNumber(area)} \\text{ m}^2 \\]`,
                "Calculamos el flujo másico:\n\\[ \\dot{m} = \\rho A v \\]",
                `\\[ \\dot{m} = ${density} \\times ${formatNumber(area)} \\times ${velocity} = ${formatNumber(massFlow)} \\text{ kg/s} \\]`,
                "Calculamos la rapidez de flujo de peso:\n\\[ \\dot{W} = \\dot{m} g = \\dot{m} \\times 9.81 \\]",
                `\\[ \\dot{W} = ${formatNumber(massFlow)} \\times 9.81 = ${formatNumber(weightFlow)} \\text{ N/s} \\]`,
                `La rapidez de flujo de peso es ${formatNumber(weightFlow)} N/s`
            ]
        };
    },
    generateValues: () => ({
        density: generateRandomNumber(998, 1000),
        velocity: generateRandomNumber(1, 5, 1),
        diameter: generateRandomNumber(5, 15)
    })
},
{
    template: (height, area, time) => {
        const volume = height * area;
        const density = 1000; // agua en kg/m³
        const mass = volume * density;
        const weightFlow = (mass * 9.81) / (time * 60);
        return {
            question: `Un tanque rectangular tiene una base de ${area} m² y contiene agua hasta una altura de ${height} m. Si el tanque se vacía completamente en ${time} minutos, ¿cuál es la rapidez de flujo de peso promedio durante el vaciado? (Considere la densidad del agua como 1000 kg/m³)`,
            hint: `Resultado: ${formatNumber(weightFlow)} N/s`,
            solution: [
                "Identificamos los datos:",
                `- Área de la base = ${area} m²\n- Altura del agua = ${height} m\n- Tiempo de vaciado = ${time} min = ${time*60} s\n- Densidad del agua = 1000 kg/m³`,
                "Calculamos el volumen de agua:\n\\[ V = \\text{área} \\times \\text{altura} \\]",
                `\\[ V = ${area} \\times ${height} = ${formatNumber(volume)} \\text{ m}^3 \\]`,
                "Calculamos la masa total del agua:\n\\[ m = \\rho V \\]",
                `\\[ m = 1000 \\times ${formatNumber(volume)} = ${formatNumber(mass)} \\text{ kg} \\]`,
                "Calculamos la rapidez de flujo de peso promedio:\n\\[ \\dot{W} = \\frac{m g}{t} \\]",
                `\\[ \\dot{W} = \\frac{${formatNumber(mass)} \\times 9.81}{${time*60}} = ${formatNumber(weightFlow)} \\text{ N/s} \\]`,
                `La rapidez de flujo de peso promedio es ${formatNumber(weightFlow)} N/s`
            ]
        };
    },
    generateValues: () => ({
        height: generateRandomNumber(1, 3, 1),
        area: generateRandomNumber(2, 6, 1),
        time: generateRandomNumber(3, 8)
    })
}]


const exerciseTemplatesRapidezFlujoMasico = [0,
    //rapidez de flujo masico

{
    template: (density, velocity, diameter) => {
        const radius = diameter / 2 / 100; // convertir a metros
        const area = Math.PI * radius * radius;
        const massFlow = density * area * velocity;
        return {
            question: `Por una tubería de ${diameter} cm de diámetro fluye aceite con densidad ${density} kg/m³ a una velocidad de ${velocity} m/s. Determine el flujo másico en kg/s.`,
            hint: `Resultado: ${formatNumber(massFlow)} kg/s`,
            solution: [
                "Identificamos los datos:",
                `- Densidad (ρ) = ${density} kg/m³\n- Diámetro (D) = ${diameter} cm = ${diameter/100} m\n- Velocidad (v) = ${velocity} m/s`,
                "Calculamos el área de la sección transversal:\n\\[ A = \\pi r^2 = \\pi (\\frac{D}{2})^2 \\]",
                `\\[ A = \\pi (\\frac{${diameter/100}}{2})^2 = ${formatNumber(area)} \\text{ m}^2 \\]`,
                "Aplicamos la ecuación de flujo másico:\n\\[ \\dot{m} = \\rho A v \\]",
                `\\[ \\dot{m} = ${density} \\times ${formatNumber(area)} \\times ${velocity} = ${formatNumber(massFlow)} \\text{ kg/s} \\]`,
                `El flujo másico es ${formatNumber(massFlow)} kg/s`
            ]
        };
    },
    generateValues: () => ({
        density: generateRandomNumber(850, 950),
        velocity: generateRandomNumber(2, 6, 1),
        diameter: generateRandomNumber(8, 20)
    })
},
{
    template: (massFlow, time, density) => {
        const totalMass = massFlow * time * 60;
        const volume = totalMass / density;
        return {
            question: `Un sistema de bombeo maneja un flujo másico constante de ${massFlow} kg/s de un líquido con densidad ${density} kg/m³. ¿Qué volumen de líquido en m³ se habrá bombeado después de ${time} minutos de operación?`,
            hint: `Resultado: ${formatNumber(volume)} m³`,
            solution: [
                "Identificamos los datos:",
                `- Flujo másico (ṁ) = ${massFlow} kg/s\n- Tiempo (t) = ${time} min = ${time*60} s\n- Densidad (ρ) = ${density} kg/m³`,
                "Calculamos la masa total bombeada:\n\\[ m_{total} = \\dot{m} \\times t \\]",
                `\\[ m_{total} = ${massFlow} \\times ${time*60} = ${formatNumber(totalMass)} \\text{ kg} \\]`,
                "Calculamos el volumen usando la densidad:\n\\[ V = \\frac{m_{total}}{\\rho} \\]",
                `\\[ V = \\frac{${formatNumber(totalMass)}}{${density}} = ${formatNumber(volume)} \\text{ m}^3 \\]`,
                `El volumen bombeado es ${formatNumber(volume)} m³`
            ]
        };
    },
    generateValues: () => ({
        massFlow: generateRandomNumber(2, 8, 1),
        time: generateRandomNumber(5, 15),
        density: generateRandomNumber(900, 1100)
    })
}
]


const exerciseTemplatesEcuacionContinuidad = [0,
    // Ecuación de Continuidad
{
    template: (diameter1, velocity1, diameter2) => {
        const area1 = Math.PI * Math.pow(diameter1/2, 2);
        const area2 = Math.PI * Math.pow(diameter2/2, 2);
        const velocity2 = (area1 * velocity1) / area2;
        
        return {
            question: `En un sistema de tuberías, el agua fluye a través de una tubería que se reduce de ${diameter1} cm a ${diameter2} cm de diámetro. Si la velocidad en la sección más grande es de ${velocity1} m/s, ¿cuál será la velocidad en la sección más pequeña?`,
            hint: `Resultado: ${formatNumber(velocity2)} m/s`,
            solution: [
                "Aplicamos la ecuación de continuidad: Q₁ = Q₂",
                `A₁v₁ = A₂v₂, donde A = π(D/2)²`,
                `Calculamos las áreas:\nA₁ = π(${diameter1/2})² = ${formatNumber(area1)} cm²\nA₂ = π(${diameter2/2})² = ${formatNumber(area2)} cm²`,
                `Despejamos v₂ = (A₁ × v₁)/A₂`,
                `v₂ = (${formatNumber(area1)} × ${velocity1})/${formatNumber(area2)}`,
                `La velocidad en la sección más pequeña es ${formatNumber(velocity2)} m/s`
            ]
        };
    },
    generateValues: () => ({
        diameter1: generateRandomNumber(8, 15),
        velocity1: generateRandomNumber(2, 5, 1),
        diameter2: generateRandomNumber(4, 7)
    })
},
{
    template: (flowRate, diameter1, velocity1) => {
        const area1 = Math.PI * Math.pow(diameter1/2, 2);
        const area2 = (flowRate/1000) / velocity1;
        const diameter2 = 2 * Math.sqrt(area2/Math.PI) * 100;
        
        return {
            question: `Un sistema de riego tiene un caudal de ${flowRate} L/s. Si en un punto la tubería tiene ${diameter1} cm de diámetro y una velocidad de ${velocity1} m/s, ¿cuál debe ser el diámetro de la segunda sección?`,
            hint: `Resultado: ${formatNumber(diameter2)} cm`,
            solution: [
                "Paso 1: Convertimos el caudal a m³/s",
                `Q = ${flowRate} L/s = ${flowRate/1000} m³/s`,
                "Paso 2: Usamos Q = A₁v₁ = A₂v₂",
                `Área de la primera sección:\nA₁ = π(${diameter1/2})² = ${formatNumber(area1)} cm² = ${formatNumber(area1/10000)} m²`,
                `Despejamos A₂ = Q/v₁ = ${flowRate/1000}/${velocity1} = ${formatNumber(area2)} m²`,
                `Calculamos el diámetro: D = 2√(A/π)`,
                `El diámetro de la segunda sección es ${formatNumber(diameter2)} cm`
            ]
        };
    },
    generateValues: () => ({
        flowRate: generateRandomNumber(20, 50),
        diameter1: generateRandomNumber(10, 20),
        velocity1: generateRandomNumber(1.5, 3, 1)
    })
},

// Ecuación de Continuidad
{
    template: (height1, velocity1, pressure1, height2) => {
        const g = 9.81;
        const rho = 1000; // densidad del agua en kg/m³
        // Aplicando Bernoulli
        const term1 = pressure1 * 1000 / rho + (velocity1 * velocity1) / 2 + g * height1;
        const velocity2 = Math.sqrt(2 * (term1 - g * height2));
        
        return {
            question: `El agua fluye en una tubería desde un punto A a una altura de ${height1} m con velocidad ${velocity1} m/s y presión de ${pressure1} kPa, hasta un punto B a ${height2} m de altura. Suponiendo flujo ideal, calcular la velocidad en el punto B. Considere la densidad del agua como 1000 kg/m³.`,
            hint: `Resultado: ${formatNumber(velocity2)} m/s`,
            solution: [
                "Aplicamos la ecuación de Bernoulli:",
                "\\[ \\frac{P_1}{\\rho g} + \\frac{v_1^2}{2g} + h_1 = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2g} + h_2 \\]",
                `Datos:\n- P₁ = ${pressure1} kPa = ${pressure1 * 1000} Pa\n- v₁ = ${velocity1} m/s\n- h₁ = ${height1} m\n- h₂ = ${height2} m\n- P₂ = 0 Pa (presión atmosférica relativa)`,
                "Despejamos v₂:",
                `\\[ v_2 = \\sqrt{2(\\frac{P_1}{\\rho} + \\frac{v_1^2}{2} + gh_1 - gh_2)} \\]`,
                `La velocidad en el punto B es ${formatNumber(velocity2)} m/s`
            ]
        };
    },
    generateValues: () => ({
        height1: generateRandomNumber(5, 15),
        velocity1: generateRandomNumber(2, 5, 1),
        pressure1: generateRandomNumber(100, 300),
        height2: generateRandomNumber(1, 4)
    })
},
{
    template: (diameter1, flowRate, height1, height2) => {
        const g = 9.81;
        const area1 = Math.PI * Math.pow(diameter1/2000, 2); // área en m²
        const velocity1 = (flowRate/1000) / area1;
        const pressureDiff = 1000 * (g * (height1 - height2) + (velocity1 * velocity1) / 2);
        
        return {
            question: `Por una tubería de ${diameter1} mm de diámetro fluye agua con un caudal de ${flowRate} L/s. Si el punto inicial está a ${height1} m y el punto final a ${height2} m de altura, calcular la diferencia de presión entre ambos puntos, asumiendo que las velocidades en ambos puntos son iguales.`,
            hint: `Resultado: ${formatNumber(pressureDiff/1000)} kPa`,
            solution: [
                "Paso 1: Calculamos la velocidad del flujo",
                `Área = π(${diameter1/2000})² = ${formatNumber(area1)} m²`,
                `Velocidad = ${flowRate/1000}/${formatNumber(area1)} = ${formatNumber(velocity1)} m/s`,
                "Paso 2: Aplicamos Bernoulli con v₁ = v₂",
                "\\[ \\frac{P_1-P_2}{\\rho g} = (h_2-h_1) \\]",
                `\\[ P_1-P_2 = \\rho g(h_2-h_1) = ${1000} \\times ${g} \\times (${height2}-${height1}) \\]`,
                `La diferencia de presión es ${formatNumber(pressureDiff/1000)} kPa`
            ]
        };
    },
    generateValues: () => ({
        diameter1: generateRandomNumber(100, 300),
        flowRate: generateRandomNumber(20, 50),
        height1: generateRandomNumber(10, 20),
        height2: generateRandomNumber(1, 5)
    })
}

]


const exerciseTemplatesEcuacionGeneralEnergia = [0,
    // Ecuación general de la Energía
{
    template: (height1, velocity1, height2, length, diameter) => {
        const g = 9.81;
        const f = 0.02; // factor de fricción aproximado
        const area = Math.PI * Math.pow(diameter/1000, 2) / 4;
        const hf = f * (length * velocity1 * velocity1) / (2 * g * diameter/1000);
        const pressure2 = 1000 * g * (height1 - height2 - hf);
        
        return {
            question: `El agua fluye por una tubería de ${diameter} mm de diámetro y ${length} m de longitud. El punto inicial está a ${height1} m de altura con velocidad ${velocity1} m/s, y el punto final a ${height2} m. Considerando pérdidas por fricción (f = 0.02), calcular la presión en el punto final.`,
            hint: `Resultado: ${formatNumber(pressure2/1000)} kPa`,
            solution: [
                "Aplicamos la ecuación general de la energía:",
                "\\[ \\frac{P_1}{\\gamma} + \\frac{v_1^2}{2g} + z_1 = \\frac{P_2}{\\gamma} + \\frac{v_2^2}{2g} + z_2 + h_f \\]",
                "Calculamos las pérdidas por fricción:",
                `\\[ h_f = f\\frac{L}{D}\\frac{v^2}{2g} = ${f}\\frac{${length}}{${diameter/1000}}\\frac{${velocity1}^2}{2(${g})} = ${formatNumber(hf)} m \\]`,
                "Como las áreas son iguales, v₁ = v₂",
                `Despejamos P₂/γ = z₁ - z₂ - hf = ${height1} - ${height2} - ${formatNumber(hf)}`,
                `La presión en el punto final es ${formatNumber(pressure2/1000)} kPa`
            ]
        };
    },
    generateValues: () => ({
        height1: generateRandomNumber(15, 30),
        velocity1: generateRandomNumber(2, 4, 1),
        height2: generateRandomNumber(5, 10),
        length: generateRandomNumber(100, 200),
        diameter: generateRandomNumber(100, 200)
    })
},
{
    template: (flowRate, diameter1, diameter2, length, height1) => {
        const g = 9.81;
        const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
        const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
        const velocity1 = (flowRate/1000) / area1;
        const velocity2 = (flowRate/1000) / area2;
        const k = 0.5; // coeficiente de pérdida por contracción
        const hm = k * Math.pow(velocity2, 2) / (2 * g);
        const power = 1000 * (flowRate/1000) * g * (height1 + hm);
        
        return {
            question: `Una bomba impulsa agua con un caudal de ${flowRate} L/s a través de una tubería que se reduce de ${diameter1} mm a ${diameter2} mm en una longitud de ${length} m. Si la altura de bombeo es ${height1} m y hay una contracción súbita (k = 0.5), calcular la potencia requerida por la bomba.`,
            hint: `Resultado: ${formatNumber(power/1000)} kW`,
            solution: [
                "Paso 1: Calculamos las velocidades",
                `v₁ = Q/A₁ = ${flowRate/1000}/${formatNumber(area1)} = ${formatNumber(velocity1)} m/s`,
                `v₂ = Q/A₂ = ${flowRate/1000}/${formatNumber(area2)} = ${formatNumber(velocity2)} m/s`,
                "Paso 2: Calculamos las pérdidas menores por contracción",
                `\\[ h_m = k\\frac{v_2^2}{2g} = ${k}\\frac{${formatNumber(velocity2)}^2}{2(${g})} = ${formatNumber(hm)} m \\]`,
                "Paso 3: Calculamos la potencia requerida",
                `\\[ Potencia = \\gamma Q H = \\rho g Q (h + h_m) \\]`,
                `La potencia requerida es ${formatNumber(power/1000)} kW`
            ]
        };
    },
    generateValues: () => ({
        flowRate: generateRandomNumber(20, 50),
        diameter1: generateRandomNumber(200, 300),
        diameter2: generateRandomNumber(100, 150),
        length: generateRandomNumber(50, 100),
        height1: generateRandomNumber(10, 20)
    })
}

]


const exerciseTemplatesSistemasClaseI = [0,
    // Sistema de Tuberías en Serie Clase I - Ejercicio 1
    {
        template: (flowRate, diameter1, diameter2, length1, length2) => {
            const g = 9.81;
            const f = 0.02;
            const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
            const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
            const velocity1 = (flowRate/1000) / area1;
            const velocity2 = (flowRate/1000) / area2;
            const hf1 = f * (length1 * velocity1 * velocity1) / (2 * g * diameter1/1000);
            const hf2 = f * (length2 * velocity2 * velocity2) / (2 * g * diameter2/1000);
            const hf_total = hf1 + hf2;
            
            return {
                question: `En un sistema de tuberías en serie, el agua fluye con un caudal de ${flowRate} L/s. La primera tubería tiene ${diameter1} mm de diámetro y ${length1} m de longitud, seguida de una segunda tubería de ${diameter2} mm de diámetro y ${length2} m de longitud. Calcular: a) La pérdida de carga en cada tubería, y b) La pérdida total del sistema. Considere f = 0.02.`,
                hint: `Resultado: Pérdida total = ${formatNumber(hf_total)} m`,
                solution: [
                    "Paso 1: Calculamos las velocidades en cada sección",
                    `v₁ = Q/A₁ = ${flowRate/1000}/${formatNumber(area1)} = ${formatNumber(velocity1)} m/s`,
                    `v₂ = Q/A₂ = ${flowRate/1000}/${formatNumber(area2)} = ${formatNumber(velocity2)} m/s`,
                    "Paso 2: Calculamos las pérdidas en cada tubería",
                    `\\[ h_{f1} = f\\frac{L_1}{D_1}\\frac{v_1^2}{2g} = ${formatNumber(hf1)} m \\]`,
                    `\\[ h_{f2} = f\\frac{L_2}{D_2}\\frac{v_2^2}{2g} = ${formatNumber(hf2)} m \\]`,
                    `Pérdida total = ${formatNumber(hf_total)} m`
                ]
            };
        },
        generateValues: () => ({
            flowRate: generateRandomNumber(20, 40),
            diameter1: generateRandomNumber(150, 200),
            diameter2: generateRandomNumber(100, 140),
            length1: generateRandomNumber(100, 200),
            length2: generateRandomNumber(150, 250)
        })
    },
    // Sistema de Tuberías en Serie Clase I - Ejercicio 2
    {
        template: (flowRate, diameter1, diameter2, diameter3, pressure_available) => {
            const g = 9.81;
            const f = 0.02;
            const length_total = 300; // longitud total fija
            
            const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
            const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
            const area3 = Math.PI * Math.pow(diameter3/1000, 2) / 4;
            
            const v1 = (flowRate/1000) / area1;
            const v2 = (flowRate/1000) / area2;
            const v3 = (flowRate/1000) / area3;
            
            const length_max = (2 * pressure_available * 1000 * g * Math.min(diameter1, diameter2, diameter3) / 1000) / 
                             (f * Math.max(v1*v1, v2*v2, v3*v3));
            
            return {
                question: `Un sistema de tuberías en serie tiene tres secciones de diámetros ${diameter1}, ${diameter2} y ${diameter3} mm. Si el caudal es ${flowRate} L/s y la presión disponible es ${pressure_available} kPa, determinar: a) Las velocidades en cada sección, y b) La longitud máxima que puede tener el sistema.`,
                hint: `Resultado: Longitud máxima = ${formatNumber(length_max)} m`,
                solution: [
                    "Paso 1: Calculamos las velocidades",
                    `v₁ = ${formatNumber(v1)} m/s\nv₂ = ${formatNumber(v2)} m/s\nv₃ = ${formatNumber(v3)} m/s`,
                    "Paso 2: Identificamos la sección crítica",
                    `Diámetro crítico = ${Math.min(diameter1, diameter2, diameter3)} mm`,
                    `Velocidad máxima = ${formatNumber(Math.max(v1, v2, v3))} m/s`,
                    "Paso 3: Calculamos la longitud máxima",
                    `\\[ L_{max} = \\frac{2P_{disp}gD}{fv_{max}^2} = ${formatNumber(length_max)} m \\]`
                ]
            };
        },
        generateValues: () => ({
            flowRate: generateRandomNumber(25, 45),
            diameter1: generateRandomNumber(200, 250),
            diameter2: generateRandomNumber(150, 180),
            diameter3: generateRandomNumber(120, 140),
            pressure_available: generateRandomNumber(200, 300)
        })
    }
]


const exerciseTemplatesSistemasClaseII = [0,
        // Sistema de Tuberías en Serie Clase II - Ejercicio 1
        {
            template: (flowRate, diameter1, diameter2, height_diff, temp) => {
                const g = 9.81;
                const k_expansion = 0.75;
                const viscosity = 0.001 * Math.exp(-0.02 * (temp - 20)); // Aproximación de viscosidad
                
                const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
                const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
                const v1 = (flowRate/1000) / area1;
                const v2 = (flowRate/1000) / area2;
                
                const Re1 = (1000 * v1 * diameter1/1000) / viscosity;
                const hm = k_expansion * Math.pow(v1 - v2, 2) / (2 * g);
                const total_head = height_diff + hm;
                
                return {
                    question: `Agua a ${temp}°C fluye a través de una expansión súbita de ${diameter1} a ${diameter2} mm con un caudal de ${flowRate} L/s. Si hay una diferencia de altura de ${height_diff} m, calcular: a) El número de Reynolds en la entrada, b) La pérdida por expansión, y c) La altura total requerida.`,
                    hint: `Resultado: Altura total = ${formatNumber(total_head)} m`,
                    solution: [
                        "Paso 1: Calculamos velocidades",
                        `v₁ = ${formatNumber(v1)} m/s\nv₂ = ${formatNumber(v2)} m/s`,
                        "Paso 2: Calculamos Reynolds",
                        `\\[ Re = \\frac{\\rho vD}{\\mu} = ${formatNumber(Re1)} \\]`,
                        "Paso 3: Calculamos pérdida por expansión",
                        `\\[ h_m = K_{exp}\\frac{(v_1-v_2)^2}{2g} = ${formatNumber(hm)} m \\]`,
                        `Altura total = ${formatNumber(total_head)} m`
                    ]
                };
            },
            generateValues: () => ({
                flowRate: generateRandomNumber(20, 40),
                diameter1: generateRandomNumber(100, 150),
                diameter2: generateRandomNumber(200, 250),
                height_diff: generateRandomNumber(2, 5),
                temp: generateRandomNumber(15, 30)
            })
        },
        // Sistema de Tuberías en Serie Clase II - Ejercicio 2
        {
            template: (flowRate, diameter1, diameter2, pressure1, elevation) => {
                const g = 9.81;
                const k_contraction = 0.5;
                const k_valve = 2.5;
                
                const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
                const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
                const v1 = (flowRate/1000) / area1;
                const v2 = (flowRate/1000) / area2;
                
                const hm_contraction = k_contraction * Math.pow(v2, 2) / (2 * g);
                const hm_valve = k_valve * Math.pow(v2, 2) / (2 * g);
                const pressure2 = pressure1 - (hm_contraction + hm_valve + elevation) * 1000 * g / 1000;
                
                return {
                    question: `En un sistema con contracción súbita de ${diameter1} a ${diameter2} mm y una válvula (k=2.5), fluye agua con caudal ${flowRate} L/s. Si la presión inicial es ${pressure1} kPa y hay una elevación de ${elevation} m, determinar: a) Las pérdidas menores, y b) La presión final.`,
                    hint: `Resultado: Presión final = ${formatNumber(pressure2)} kPa`,
                    solution: [
                        "Paso 1: Calculamos velocidades",
                        `v₁ = ${formatNumber(v1)} m/s\nv₂ = ${formatNumber(v2)} m/s`,
                        "Paso 2: Calculamos pérdidas menores",
                        `Contracción: ${formatNumber(hm_contraction)} m`,
                        `Válvula: ${formatNumber(hm_valve)} m`,
                        "Paso 3: Aplicamos ecuación de energía",
                        `\\[ \\frac{P_2}{\\gamma} = \\frac{P_1}{\\gamma} - h_m - z \\]`,
                        `Presión final = ${formatNumber(pressure2)} kPa`
                    ]
                };
            },
            generateValues: () => ({
                flowRate: generateRandomNumber(25, 45),
                diameter1: generateRandomNumber(200, 250),
                diameter2: generateRandomNumber(100, 150),
                pressure1: generateRandomNumber(300, 400),
                elevation: generateRandomNumber(5, 10)
            })
        }    
]


const exerciseTemplatesSistemasClaseIII= [0,
        // Sistema de Tuberías en Serie Clase III - Ejercicio 1
        {
            template: (flowRate, pump_power, efficiency, diameter1, diameter2) => {
                const g = 9.81;
                const length = 200; // longitud fija
                const f = 0.02;
                
                const area1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
                const area2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
                const v1 = (flowRate/1000) / area1;
                const v2 = (flowRate/1000) / area2;
                
                const head_pump = (pump_power * efficiency * 1000) / (1000 * g * (flowRate/1000));
                const hf = f * length * (v1 * v1 + v2 * v2) / (4 * g * ((diameter1 + diameter2)/2000));
                const net_head = head_pump - hf;
                
                return {
                    question: `Una bomba de ${pump_power} kW con eficiencia ${efficiency * 100}% impulsa agua por tuberías de ${diameter1} y ${diameter2} mm (L = 200m). Para un caudal de ${flowRate} L/s, calcular: a) La altura de la bomba, b) Las pérdidas totales, y c) La altura neta disponible.`,
                    hint: `Resultado: Altura neta = ${formatNumber(net_head)} m`,
                    solution: [
                        "Paso 1: Calculamos la altura de la bomba",
                        `\\[ H_b = \\frac{P\\eta}{\\gamma Q} = ${formatNumber(head_pump)} m \\]`,
                        "Paso 2: Calculamos pérdidas por fricción",
                        `v₁ = ${formatNumber(v1)} m/s\nv₂ = ${formatNumber(v2)} m/s`,
                        `\\[ h_f = ${formatNumber(hf)} m \\]`,
                        `Altura neta = ${formatNumber(net_head)} m`
                    ]
                };
            },
            generateValues: () => ({
                flowRate: generateRandomNumber(30, 50),
                pump_power: generateRandomNumber(5, 15),
                efficiency: generateRandomNumber(0.7, 0.85, 2),
                diameter1: generateRandomNumber(200, 250),
                diameter2: generateRandomNumber(150, 180)
            })
        },
        // Ejercicio 2: Tuberías en Serie Clase 3
        {
            template: (flowRate, diameter1, length1, diameter2, length2, diameter3, length3) => {
                // Conversiones y constantes
                const flow = flowRate / 3600; // Convertir a m³/s
                const kinematicViscosity = 1e-6; // m²/s para agua a 20°C
                const g = 9.81;
                
                // Cálculos para cada sección
                const areas = [
                    Math.PI * Math.pow(diameter1/1000, 2) / 4,
                    Math.PI * Math.pow(diameter2/1000, 2) / 4,
                    Math.PI * Math.pow(diameter3/1000, 2) / 4
                ];
                
                const velocities = areas.map(a => flow / a);
                const reynolds = velocities.map((v, i) => 
                    v * ([diameter1, diameter2, diameter3][i]/1000) / kinematicViscosity);
                
                // Factores de fricción usando la ecuación de Blasius
                const frictions = reynolds.map(re => 0.316 * Math.pow(re, -0.25));
                
                // Pérdidas por fricción
                const hf = [
                    frictions[0] * (length1/(diameter1/1000)) * Math.pow(velocities[0], 2)/(2*g),
                    frictions[1] * (length2/(diameter2/1000)) * Math.pow(velocities[1], 2)/(2*g),
                    frictions[2] * (length3/(diameter3/1000)) * Math.pow(velocities[2], 2)/(2*g)
                ];
                
                const totalLoss = hf.reduce((a, b) => a + b);
    
                return {
                    question: `Un sistema de tuberías en serie consta de tres secciones: 
                    1) D₁ = ${diameter1} mm, L₁ = ${length1} m 
                    2) D₂ = ${diameter2} mm, L₂ = ${length2} m 
                    3) D₃ = ${diameter3} mm, L₃ = ${length3} m 
                    Si circula un caudal de ${flowRate} m³/h de agua a 20°C, determine: 
                    a) La velocidad en cada sección 
                    b) El número de Reynolds en cada sección 
                    c) La pérdida de carga total del sistema.`,
                    hint: `Pérdida total: ${formatNumber(totalLoss)} m`,
                    solution: [
                        "1. Cálculo de áreas y velocidades:",
                        velocities.map((v, i) => `   Sección ${i+1}: V = ${formatNumber(v)} m/s`).join('\n'),
                        "2. Cálculo de números de Reynolds:",
                        reynolds.map((re, i) => `   Sección ${i+1}: Re = ${formatNumber(re)}`).join('\n'),
                        "3. Cálculo de factores de fricción (Blasius):",
                        frictions.map((f, i) => `   Sección ${i+1}: f = ${formatNumber(f)}`).join('\n'),
                        "4. Cálculo de pérdidas por sección:",
                        hf.map((h, i) => `   Sección ${i+1}: hf = ${formatNumber(h)} m`).join('\n'),
                        `\nPérdida de carga total: ${formatNumber(totalLoss)} m`
                    ]
                };
            },
            generateValues: () => ({
                flowRate: generateRandomNumber(20, 50),
                diameter1: generateRandomNumber(80, 100),
                length1: generateRandomNumber(50, 100),
                diameter2: generateRandomNumber(60, 80),
                length2: generateRandomNumber(30, 80),
                diameter3: generateRandomNumber(40, 60),
                length3: generateRandomNumber(20, 60)
            })
        }
]

const exerciseTemplatesTuberiasParalelo = [0,
   // Ejercicio 1: Tuberías en Paralelo
   {
    template: (totalFlow, diameter1, length1, diameter2, length2) => {
        const g = 9.81;
        const kinematicViscosity = 1e-6;
        
        // Función para calcular el factor de fricción inicial
        const calcFriction = (re) => 0.316 * Math.pow(re, -0.25);
        
        // Función para calcular pérdida de carga
        const calcHead = (q, d, l, f) => {
            const a = Math.PI * Math.pow(d/1000, 2) / 4;
            const v = q / a;
            return f * (l/(d/1000)) * Math.pow(v, 2)/(2*g);
        };
        
        // Proceso iterativo para encontrar la distribución de flujos
        let q1 = totalFlow/2;
        let q2 = totalFlow/2;
        const maxIterations = 10;
        let iterations = 0;
        
        while (iterations < maxIterations) {
            const a1 = Math.PI * Math.pow(diameter1/1000, 2) / 4;
            const a2 = Math.PI * Math.pow(diameter2/1000, 2) / 4;
            const v1 = q1 / a1;
            const v2 = q2 / a2;
            const re1 = v1 * (diameter1/1000) / kinematicViscosity;
            const re2 = v2 * (diameter2/1000) / kinematicViscosity;
            const f1 = calcFriction(re1);
            const f2 = calcFriction(re2);
            
            const h1 = calcHead(q1, diameter1, length1, f1);
            const h2 = calcHead(q2, diameter2, length2, f2);
            
            if (Math.abs(h1 - h2) < 0.001) break;
            
            // Ajustar caudales
            const avgHead = (h1 + h2) / 2;
            q1 = q1 * Math.sqrt(avgHead/h1);
            q2 = totalFlow - q1;
            
            iterations++;
        }
        
        const finalHead = calcHead(q1, diameter1, length1, 
            calcFriction(q1/(Math.PI * Math.pow(diameter1/1000, 2) / 4) * 
            (diameter1/1000) / kinematicViscosity));

        return {
            question: `Dos tuberías en paralelo conectan dos depósitos. La tubería 1 tiene un diámetro de ${diameter1} mm y longitud ${length1} m, mientras que la tubería 2 tiene un diámetro de ${diameter2} mm y longitud ${length2} m. Si el caudal total es ${formatNumber(totalFlow*3600)} m³/h, determine: 
            a) El caudal que circula por cada tubería 
            b) La pérdida de carga del sistema`,
            hint: `Q₁ = ${formatNumber(q1*3600)} m³/h, Q₂ = ${formatNumber(q2*3600)} m³/h`,
            solution: [
                "1. Sistema de tuberías en paralelo:",
                `   Q_total = Q₁ + Q₂ = ${formatNumber(totalFlow*3600)} m³/h`,
                "2. Distribución de caudales:",
                `   Q₁ = ${formatNumber(q1*3600)} m³/h\n   Q₂ = ${formatNumber(q2*3600)} m³/h`,
                "3. Comprobación de pérdidas iguales:",
                `   h₁ = h₂ = ${formatNumber(finalHead)} m`,
                `\nPérdida de carga del sistema: ${formatNumber(finalHead)} m`
            ]
        };
    },
    generateValues: () => ({
        totalFlow: generateRandomNumber(100, 200)/3600, // Convertir a m³/s
        diameter1: generateRandomNumber(80, 120),
        length1: generateRandomNumber(100, 200),
        diameter2: generateRandomNumber(60, 100),
        length2: generateRandomNumber(150, 250)
    })
},
// Ejercicio 2: Tuberías en Paralelo con Tres Ramales
{
    template: (totalFlow, d1, l1, d2, l2, d3, l3) => {
        const g = 9.81;
        const kinematicViscosity = 1e-6;
        
        // Función para calcular el factor de fricción
        const calcFriction = (re) => 0.316 * Math.pow(re, -0.25);
        
        // Función para calcular pérdida de carga
        const calcHead = (q, d, l, f) => {
            const a = Math.PI * Math.pow(d/1000, 2) / 4;
            const v = q / a;
            return f * (l/(d/1000)) * Math.pow(v, 2)/(2*g);
        };
        
        // Proceso iterativo para tres ramales
        let q1 = totalFlow/3;
        let q2 = totalFlow/3;
        let q3 = totalFlow/3;
        const maxIterations = 15;
        let iterations = 0;
        
        while (iterations < maxIterations) {
            const a1 = Math.PI * Math.pow(d1/1000, 2) / 4;
            const a2 = Math.PI * Math.pow(d2/1000, 2) / 4;
            const a3 = Math.PI * Math.pow(d3/1000, 2) / 4;
            
            const v1 = q1 / a1;
            const v2 = q2 / a2;
            const v3 = q3 / a3;
            
            const re1 = v1 * (d1/1000) / kinematicViscosity;
            const re2 = v2 * (d2/1000) / kinematicViscosity;
            const re3 = v3 * (d3/1000) / kinematicViscosity;
            
            const f1 = calcFriction(re1);
            const f2 = calcFriction(re2);
            const f3 = calcFriction(re3);
            
            const h1 = calcHead(q1, d1, l1, f1);
            const h2 = calcHead(q2, d2, l2, f2);
            const h3 = calcHead(q3, d3, l3, f3);
            
            const avgHead = (h1 + h2 + h3) / 3;
            
            if (Math.abs(h1 - h2) < 0.001 && Math.abs(h2 - h3) < 0.001) break;
            
            q1 = q1 * Math.sqrt(avgHead/h1);
            q2 = q2 * Math.sqrt(avgHead/h2);
            q3 = totalFlow - q1 - q2;
            
            iterations++;
        }
        
        const finalHead = calcHead(q1, d1, l1, 
            calcFriction(q1/(Math.PI * Math.pow(d1/1000, 2) / 4) * 
            (d1/1000) / kinematicViscosity));

        return {
            question: `Tres tuberías en paralelo conectan dos depósitos:
            1) D₁ = ${d1} mm, L₁ = ${l1} m
            2) D₂ = ${d2} mm, L₂ = ${l2} m
            3) D₃ = ${d3} mm, L₃ = ${l3} m
            Para un caudal total de ${formatNumber(totalFlow*3600)} m³/h, determine:
            a) El caudal que circula por cada ramal
            b) La pérdida de carga del sistema`,
            hint: `Q₁ = ${formatNumber(q1*3600)} m³/h, Q₂ = ${formatNumber(q2*3600)} m³/h, Q₃ = ${formatNumber(q3*3600)} m³/h`,
            solution: [
                "1. Sistema de tres tuberías en paralelo:",
                `   Q_total = Q₁ + Q₂ + Q₃ = ${formatNumber(totalFlow*3600)} m³/h`,
                "2. Distribución de caudales:",
                `   Q₁ = ${formatNumber(q1*3600)} m³/h\n   Q₂ = ${formatNumber(q2*3600)} m³/h\n   Q₃ = ${formatNumber(q3*3600)} m³/h`,
                "3. Verificación de pérdidas iguales:",
                `   h₁ = h₂ = h₃ = ${formatNumber(finalHead)} m`,
                `\nPérdida de carga del sistema: ${formatNumber(finalHead)} m`
            ]
        };
    },
    generateValues: () => ({
        totalFlow: generateRandomNumber(150, 300)/3600,
        d1: generateRandomNumber(100, 150),
        l1: generateRandomNumber(100, 200),
        d2: generateRandomNumber(80, 120),
        l2: generateRandomNumber(150, 250),
        d3: generateRandomNumber(60, 100),
        l3: generateRandomNumber(120, 220)
    })
}]


const exerciseTemplatesSeleccionBombas= [0,
    // Selección de bombas
{
    template: (pisos, aptosPorPiso, consumoPorApto, altitudCiudad, profundidadSuccion, alturaAdicional, alturaPiso) => {
        // Cálculos del ejemplo 1
        const numAptos = pisos * aptosPorPiso;
        const factorSimultaneidad = 0.6;
        const consumoDiario = numAptos * consumoPorApto * factorSimultaneidad;
        const caudalLps = (consumoDiario / (24 * 3600));
        const caudalM3h = caudalLps * 3.6;
        
        const alturaEstatica = (pisos * alturaPiso) + alturaAdicional + profundidadSuccion;
        const perdidasFriccion = 2.3; // Valor base calculado
        const perdidasAccesorios = 0.95; // Valor base calculado
        // Ajustamos las pérdidas según el caudal
        const factorAjuste = caudalM3h / 1.0; // 1.0 es el caudal del ejemplo original
        const perdidasTotales = (perdidasFriccion + perdidasAccesorios) * Math.pow(factorAjuste, 1.852);
        const ADT = alturaEstatica + perdidasTotales;
        
        return {
            question: `Se requiere diseñar el sistema de bombeo para un edificio residencial de ${pisos} pisos ubicado en una ciudad a ${altitudCiudad}m de altitud. El edificio cuenta con ${aptosPorPiso} apartamentos por piso, cada uno con un consumo promedio de ${consumoPorApto} litros por día. El agua será bombeada desde un tanque subterráneo ubicado a ${profundidadSuccion} metros bajo el nivel del suelo hasta un tanque elevado que se encuentra ${alturaAdicional} metros por encima del último piso. La altura de cada piso es de ${alturaPiso} metros.`,
            hint: `Caudal = ${caudalM3h.toFixed(2)} m³/h, ADT = ${ADT.toFixed(2)} m`,
            solution: [
                "1. Cálculo del Caudal (Q):",
                `- Número total de apartamentos = ${pisos} × ${aptosPorPiso} = ${numAptos}`,
                `- Consumo diario total con factor de simultaneidad = ${consumoDiario.toFixed(2)} L/día`,
                `- Caudal = ${caudalLps.toFixed(3)} L/s = ${caudalM3h.toFixed(2)} m³/h`,
                "\n2. Cálculo de la Altura Dinámica Total (ADT):",
                `- Altura Estática = ${alturaEstatica} m`,
                `- Pérdidas por Fricción y Accesorios = ${perdidasTotales.toFixed(2)} m`,
                `- ADT Total = ${ADT.toFixed(2)} m`
            ]
        };
    },
    generateValues: () => ({
        pisos: generateRandomNumber(8, 15), // Edificios típicos residenciales
        aptosPorPiso: generateRandomNumber(2, 6), // Número razonable de apartamentos por piso
        consumoPorApto: generateRandomNumber(800, 1200), // Consumo típico residencial
        altitudCiudad: generateRandomNumber(0, 2800), // Rango de altitudes típicas
        profundidadSuccion: generateRandomNumber(2, 5), // Profundidad típica de tanque
        alturaAdicional: generateRandomNumber(1.5, 3), // Altura adicional típica
        alturaPiso: generateRandomNumber(2.8, 3.5) // Altura típica de piso
    })
},
{
    template: (hectareas, laminaRiego, altitud, diferenciaNivel, longitudTuberia, tempAgua) => {
        // Cálculos del ejemplo 2
        const area = hectareas * 10000; // en m²
        const volumenDiario = area * (laminaRiego/1000); // en m³
        const tiempoOperacion = 8; // horas
        const caudalM3h = volumenDiario / tiempoOperacion;
        const caudalM3s = caudalM3h / 3600;
        
        const alturaEstatica = diferenciaNivel;
        const perdidasFriccion = 8.4; // Valor base calculado
        const perdidasAccesorios = 2.1; // Valor base calculado
        // Ajustamos las pérdidas según el caudal
        const factorAjuste = caudalM3h / 31.25; // 31.25 es el caudal del ejemplo original
        const perdidasTotales = (perdidasFriccion + perdidasAccesorios) * Math.pow(factorAjuste, 1.852);
        const ADT = alturaEstatica + perdidasTotales;

        return {
            question: `Un agricultor necesita implementar un sistema de riego por aspersión para un cultivo de ${hectareas} hectáreas. El sistema debe proporcionar una lámina de riego de ${laminaRiego} mm por día, operando ${tiempoOperacion} horas diarias. El agua será bombeada desde un punto con una diferencia de nivel de ${diferenciaNivel} metros. Se utilizará una tubería con longitud total de ${longitudTuberia} metros. La temperatura del agua es de ${tempAgua}°C durante la operación.`,
            hint: `Caudal = ${caudalM3h.toFixed(2)} m³/h, ADT = ${ADT.toFixed(2)} m`,
            solution: [
                "1. Cálculo del Caudal (Q):",
                `- Área total = ${area} m²`,
                `- Volumen diario = ${volumenDiario.toFixed(2)} m³/día`,
                `- Caudal = ${caudalM3h.toFixed(2)} m³/h = ${caudalM3s.toFixed(5)} m³/s`,
                "\n2. Cálculo de la Altura Dinámica Total (ADT):",
                `- Altura Estática = ${alturaEstatica} m`,
                `- Pérdidas por Fricción y Accesorios = ${perdidasTotales.toFixed(2)} m`,
                `- ADT Total = ${ADT.toFixed(2)} m`
            ]
        };
    },
    generateValues: () => ({
        hectareas: generateRandomNumber(3, 10), // Tamaño típico de cultivo
        laminaRiego: generateRandomNumber(4, 8, 1), // Lámina de riego típica
        altitud: generateRandomNumber(0, 1000), // Altitud razonable para cultivos
        diferenciaNivel: generateRandomNumber(10, 25), // Diferencia de nivel típica
        longitudTuberia: generateRandomNumber(150, 300), // Longitud típica de tubería
        tempAgua: generateRandomNumber(20, 35) // Temperatura típica del agua
    })
}
]

// FIN

function createExercise(template, index) {
    const values = template.generateValues();
    const exercise = template.template(...Object.values(values));

    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'exercise-card';
    exerciseElement.innerHTML = `
        <h3>Ejercicio ${index - 4}</h3>
        <p>${exercise.question}</p>
        <button class="btn hint-btn" onclick="toggleHint(${index})">Mostrar pista</button>
        <button class="btn solution-btn" onclick="toggleSolution(${index})">Mostrar solución</button>
        <div id="hint-${index}" class="hint">
            <p>${exercise.hint}</p>
        </div>
        <div id="solution-${index}" class="solution">
            ${exercise.solution.map((step, i) => `
                <div class="step">
                    <strong>Paso ${i + 1}:</strong><br>
                    ${step}
                </div>
            `).join('')}
        </div>
    `;
    return exerciseElement;
}

function toggleSolution(index) {
    const solution = document.getElementById(`solution-${index}`);
    const button = solution.previousElementSibling;  // Cambiado para obtener el botón correcto
    if (solution.style.display === 'none' || !solution.style.display) {
        solution.style.display = 'block';
        button.textContent = 'Ocultar solución';
        document.addEventListener("DOMContentLoaded", () => {
            MathJax.typeset();
        });
    } else {
        solution.style.display = 'none';
        button.textContent = 'Mostrar solución';
}
}

function toggleHint(index) {
    const hint = document.getElementById(`hint-${index}`);
    const button = hint.previousElementSibling;  // Cambiado para obtener el botón correcto
    if (hint.style.display === 'none' || !hint.style.display) {
        hint.style.display = 'block';
        button.textContent = 'Ocultar pista';
    } else {
        hint.style.display = 'none';
        button.textContent = 'Mostrar pista';
    }
}

// Esta sera la funsión que se debe actualizar.
const container = document.getElementById('exercises-container');
let cont = 2;

function initializeExercises(nombreContenedor, ejercicioUsado) {
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            continue
        }

        const templateIndex = i % ejercicioUsado.length;
        const exercise = createExercise(ejercicioUsado[templateIndex], (i+2*cont));
        nombreContenedor.appendChild(exercise);
    }
    document.addEventListener("DOMContentLoaded", () => {
    MathJax.typeset();
});
cont++
}

// Variables necesarias para mostrar ejercicios
const contenPeso = document.getElementById("exercises-container-peso");
const contenRelacionPesoDensidad = document.getElementById("exercises-container-relacion");
const contenVolumenEs = document.getElementById("exercises-container-volumen-especi");
const contenDensidadRelativa = document.getElementById("exercises-container-densidad-relativa");
const contenPresionAbsoluta = document.getElementById("exercises-container-presion-absoluta")
const contenPresionManometrica= document.getElementById("exercises-container-presion-manometrica")
const contenPrinsipioPascal = document.getElementById("exercises-container-prinsipio-pascal")
const contenPrensaHidraulica = document.getElementById("exercises-container-prensa-hidraulica")
const contenCapilaridad = document.getElementById("exercises-container-capilaridad")
const contenTensionSuperficial = document.getElementById("exercises-container-tension-superficial")
const contenCaudal = document.getElementById("exercises-container-caudal")
// const contenRapidezFlujoPeso= document.getElementById("exercises-container-rapides-flujo-peso")
/////// Esto es para los restantes
const contenRapidezFlujoPeso= document.getElementById("exercises-container-flujo-peso")
const contenRapidezFlujoMasico = document.getElementById("exercises-container-flujo-masico")
const contenRapidezEcContinuidad = document.getElementById("exercises-container-ecuacion-continuidad")
const contenRapidezEcGeneralEnergia = document.getElementById("exercises-container-ecuacion-general-energia")
const contenRapidezSistemasClaseI = document.getElementById("exercises-container-sistemas-claseI")
const contenRapidezSistemasClaseII = document.getElementById("exercises-container-sistemas-claseII")
const contenRapidezSistemasClaseIII= document.getElementById("exercises-container-sistemas-claseIII")
const contenRapidezSistemasParalelo = document.getElementById("exercises-container-sistemas-paralelo")
const contenRapidezSeleccionBombas = document.getElementById("exercises-container-seleccion-bombas")



// Ejecución de ejercicios para que se muestren en el DOM
window.onload = initializeExercises(container, exerciseTemplatesDensidad);
window.onload = initializeExercises(contenPeso, exerciseTemplatesPesoEspecifi);
window.onload = initializeExercises(contenRelacionPesoDensidad, exerciseTemplatesRelacion);
window.onload = initializeExercises(contenVolumenEs, exerciseTemplatesVolumenEspecifico);
window.onload = initializeExercises(contenDensidadRelativa, exerciseTemplatesDensidadRelativa);
window.onload = initializeExercises(contenPresionAbsoluta, exerciseTemplatesPresionAbsoluta);
window.onload = initializeExercises(contenPresionManometrica, exerciseTemplatesPresionManometrica);
window.onload = initializeExercises(contenPrinsipioPascal, exerciseTemplatesPrinsipioPascal);
window.onload = initializeExercises(contenPrensaHidraulica, exerciseTemplatesPrensaHidraulica);
window.onload = initializeExercises(contenCapilaridad, exerciseTemplatesCapilaridad);
window.onload = initializeExercises(contenTensionSuperficial, exerciseTemplatesTensionSuperficial);
window.onload = initializeExercises(contenCaudal, exerciseTemplatesCaudal);
window.onload = initializeExercises(contenRapidezFlujoPeso, exerciseTemplatesRapidezFlujoPeso);
window.onload = initializeExercises(contenRapidezFlujoMasico, exerciseTemplatesRapidezFlujoMasico);
window.onload = initializeExercises(contenRapidezEcContinuidad, exerciseTemplatesEcuacionContinuidad);
window.onload = initializeExercises(contenRapidezEcGeneralEnergia, exerciseTemplatesEcuacionGeneralEnergia);
window.onload = initializeExercises(contenRapidezSistemasClaseI, exerciseTemplatesSistemasClaseI);
window.onload = initializeExercises(contenRapidezSistemasClaseII, exerciseTemplatesSistemasClaseII);
window.onload = initializeExercises(contenRapidezSistemasClaseIII, exerciseTemplatesSistemasClaseIII);
window.onload = initializeExercises(contenRapidezSistemasParalelo, exerciseTemplatesTuberiasParalelo);
window.onload = initializeExercises(contenRapidezSeleccionBombas, exerciseTemplatesSeleccionBombas);


console.log(cont);
