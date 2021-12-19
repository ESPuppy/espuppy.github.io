({
    name: "OLED", // Category Name
    description: "Show text and image on OLED Display",
    author: "microBlock",
    category: "Display",
    version: "1.0.0",
 //   icon: "./static/icon.png", // Category icon
    icon: "/icon55.png", // Category icon
    color: "#2980B9", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "oled_init",
        //add for rotato block in menu
        {
            xml: `
                <block type="oled_rotate">
                   <value name="rotate_dir">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="oled_draw_text">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="oled_draw_line">
                    <value name="x1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y1">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="x2">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="y2">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="oled_draw_rect">
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="width">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="height">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "oled_fill",
        "oled_clear",
        "oled_show"
    ]
});
