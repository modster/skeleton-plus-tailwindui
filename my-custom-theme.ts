import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "my-custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": "system-ui",
    "--theme-font-family-heading": "system-ui",
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "255 255 255",
    "--on-success": "255 255 255",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #5b21d1
    "--color-primary-50": "230 222 248", // #e6def8
    "--color-primary-100": "222 211 246", // #ded3f6
    "--color-primary-200": "214 200 244", // #d6c8f4
    "--color-primary-300": "189 166 237", // #bda6ed
    "--color-primary-400": "140 100 223", // #8c64df
    "--color-primary-500": "91 33 209", // #5b21d1
    "--color-primary-600": "82 30 188", // #521ebc
    "--color-primary-700": "68 25 157", // #44199d
    "--color-primary-800": "55 20 125", // #37147d
    "--color-primary-900": "45 16 102", // #2d1066
    // secondary | #16a973
    "--color-secondary-50": "220 242 234", // #dcf2ea
    "--color-secondary-100": "208 238 227", // #d0eee3
    "--color-secondary-200": "197 234 220", // #c5eadc
    "--color-secondary-300": "162 221 199", // #a2ddc7
    "--color-secondary-400": "92 195 157", // #5cc39d
    "--color-secondary-500": "22 169 115", // #16a973
    "--color-secondary-600": "20 152 104", // #149868
    "--color-secondary-700": "17 127 86", // #117f56
    "--color-secondary-800": "13 101 69", // #0d6545
    "--color-secondary-900": "11 83 56", // #0b5338
    // tertiary | #646c3d
    "--color-tertiary-50": "232 233 226", // #e8e9e2
    "--color-tertiary-100": "224 226 216", // #e0e2d8
    "--color-tertiary-200": "216 218 207", // #d8dacf
    "--color-tertiary-300": "193 196 177", // #c1c4b1
    "--color-tertiary-400": "147 152 119", // #939877
    "--color-tertiary-500": "100 108 61", // #646c3d
    "--color-tertiary-600": "90 97 55", // #5a6137
    "--color-tertiary-700": "75 81 46", // #4b512e
    "--color-tertiary-800": "60 65 37", // #3c4125
    "--color-tertiary-900": "49 53 30", // #31351e
    // success | #786475
    "--color-success-50": "235 232 234", // #ebe8ea
    "--color-success-100": "228 224 227", // #e4e0e3
    "--color-success-200": "221 216 221", // #ddd8dd
    "--color-success-300": "201 193 200", // #c9c1c8
    "--color-success-400": "161 147 158", // #a1939e
    "--color-success-500": "120 100 117", // #786475
    "--color-success-600": "108 90 105", // #6c5a69
    "--color-success-700": "90 75 88", // #5a4b58
    "--color-success-800": "72 60 70", // #483c46
    "--color-success-900": "59 49 57", // #3b3139
    // warning | #1777e3
    "--color-warning-50": "220 235 251", // #dcebfb
    "--color-warning-100": "209 228 249", // #d1e4f9
    "--color-warning-200": "197 221 248", // #c5ddf8
    "--color-warning-300": "162 201 244", // #a2c9f4
    "--color-warning-400": "93 160 235", // #5da0eb
    "--color-warning-500": "23 119 227", // #1777e3
    "--color-warning-600": "21 107 204", // #156bcc
    "--color-warning-700": "17 89 170", // #1159aa
    "--color-warning-800": "14 71 136", // #0e4788
    "--color-warning-900": "11 58 111", // #0b3a6f
    // error | #5315da
    "--color-error-50": "229 220 249", // #e5dcf9
    "--color-error-100": "221 208 248", // #ddd0f8
    "--color-error-200": "212 197 246", // #d4c5f6
    "--color-error-300": "186 161 240", // #baa1f0
    "--color-error-400": "135 91 229", // #875be5
    "--color-error-500": "83 21 218", // #5315da
    "--color-error-600": "75 19 196", // #4b13c4
    "--color-error-700": "62 16 164", // #3e10a4
    "--color-error-800": "50 13 131", // #320d83
    "--color-error-900": "41 10 107", // #290a6b
    // surface | #7f9be7
    "--color-surface-50": "236 240 251", // #ecf0fb
    "--color-surface-100": "229 235 250", // #e5ebfa
    "--color-surface-200": "223 230 249", // #dfe6f9
    "--color-surface-300": "204 215 245", // #ccd7f5
    "--color-surface-400": "165 185 238", // #a5b9ee
    "--color-surface-500": "127 155 231", // #7f9be7
    "--color-surface-600": "114 140 208", // #728cd0
    "--color-surface-700": "95 116 173", // #5f74ad
    "--color-surface-800": "76 93 139", // #4c5d8b
    "--color-surface-900": "62 76 113", // #3e4c71
  },
};
