window.BENCHMARK_DATA = {
  "lastUpdate": 1668980251788,
  "repoUrl": "https://github.com/blobcode/boa",
  "entries": {
    "Boa Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "c772bc5038a0a11ab84f92b06140ccc1abd7a095",
          "message": "env changes",
          "timestamp": "2022-11-20T15:27:01-05:00",
          "tree_id": "f75fa8d47d7b4b94f5a0cf82b2a7f40a78ed3147",
          "url": "https://github.com/blobcode/boa/commit/c772bc5038a0a11ab84f92b06140ccc1abd7a095"
        },
        "date": 1668977144757,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 5776,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 18053,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 20777,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 11583,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 12442,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 13297,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 8280,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 10808,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 10328,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 12831,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 14924,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 17744,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 160925,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 9814,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 14147,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 7297,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14231,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 18489,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 17927,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 7352,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 36777,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 32048,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1006,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2469,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 2609,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1442,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1459,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1690,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1506,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1522,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 1690,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 1689,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2206,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 4417,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 1714,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2222,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1118,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1209,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1475,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 556,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 4816,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4168,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4082,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 16454,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1144615,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 4845,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5053,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 5139,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 9317,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 9324,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 13648,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 13660,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 9470,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1347574,
            "range": "± 3044",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 806800,
            "range": "± 6566",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 4204,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 4465,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 3975,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4103,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 5321,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 7714,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 592,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 754789,
            "range": "± 3318",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 707378,
            "range": "± 3233",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "b107b22f6a4523c38ccb4c40455837ef63670d23",
          "message": "move miri to misc",
          "timestamp": "2022-11-20T15:33:22-05:00",
          "tree_id": "4ded887c7d3d6f40de458a59f6b0f5312d41c33e",
          "url": "https://github.com/blobcode/boa/commit/b107b22f6a4523c38ccb4c40455837ef63670d23"
        },
        "date": 1668977611628,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6360,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 20206,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 23228,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12858,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13796,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14634,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 9165,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11979,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 11423,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 14247,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16601,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19709,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 183574,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10819,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15803,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8007,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 16058,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 20804,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 20321,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8184,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 40658,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 35324,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1217,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2878,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 3047,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1720,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1762,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1995,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1819,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1799,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 2020,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 2041,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1731,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2611,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 5250,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 2079,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2674,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1660,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1185,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1252,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1616,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 671,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5590,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4953,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4923,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 19875,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1392107,
            "range": "± 7067",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 5901,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 6145,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 6245,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 11236,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 11240,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 16289,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 16326,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 11497,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1602232,
            "range": "± 3548",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 964021,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 5052,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 5438,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4821,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 5060,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6656,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 9332,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 731,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 885943,
            "range": "± 6882",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 827691,
            "range": "± 4407",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "f3418a0c68d3fa1fe30ee0081c621c6af7969e9e",
          "message": "move miri back to tests",
          "timestamp": "2022-11-20T15:35:11-05:00",
          "tree_id": "1d02182402f3b1c9985796782e76e8997edf1dfd",
          "url": "https://github.com/blobcode/boa/commit/f3418a0c68d3fa1fe30ee0081c621c6af7969e9e"
        },
        "date": 1668977743533,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6386,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 19294,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 22405,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12900,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13795,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14641,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 8937,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11659,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 11281,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13867,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16171,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19072,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 170623,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10698,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15290,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8075,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 15359,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 19983,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 19522,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 7790,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 39714,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 34662,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1080,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2678,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 2798,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1536,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1555,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1803,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1626,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1620,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 1798,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 1800,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2367,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 4316,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 1850,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2448,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1486,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1141,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1212,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1556,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 518,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5170,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4573,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4356,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 17045,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1269463,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 5202,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5423,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 5511,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 10026,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 10024,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 14520,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14561,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 10282,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1439178,
            "range": "± 10785",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 867029,
            "range": "± 4264",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 4511,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 4801,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4254,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4567,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 5936,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 8390,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 468,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 806162,
            "range": "± 3926",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 757006,
            "range": "± 3107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "4530920833693ec6c2270d803ce62a05367b0159",
          "message": "add perms",
          "timestamp": "2022-11-20T16:06:32-05:00",
          "tree_id": "012b8da52cf00fd9d6c156f0cb5e1bc1b779b924",
          "url": "https://github.com/blobcode/boa/commit/4530920833693ec6c2270d803ce62a05367b0159"
        },
        "date": 1668979292883,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 300,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6378,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 19280,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 22437,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12738,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13768,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14447,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 8962,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11678,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 11295,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13938,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16194,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19167,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 171279,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10716,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15329,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8031,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 15388,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 19892,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 19438,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 7733,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 39757,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 34584,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1063,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2705,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 2806,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1511,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1537,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1784,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1627,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1645,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 1814,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 1809,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1560,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2374,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 4289,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 1848,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2430,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1467,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1209,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1527,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 488,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5177,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4457,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4343,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 16973,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1280994,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 5119,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5387,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 5436,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 9933,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 9981,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 14443,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14523,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 10182,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1434640,
            "range": "± 9705",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 863602,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 4463,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 4764,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4246,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4532,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 5904,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 8250,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 473,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 800657,
            "range": "± 5156",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 750519,
            "range": "± 4579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "80750e9aaa73f96dd966f4e1e52fd8084f15a500",
          "message": "restrict miri to macos",
          "timestamp": "2022-11-20T16:11:56-05:00",
          "tree_id": "8f43fd923cc02f132df6bfe2387b38678399836c",
          "url": "https://github.com/blobcode/boa/commit/80750e9aaa73f96dd966f4e1e52fd8084f15a500"
        },
        "date": 1668979663281,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 361,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6821,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 22184,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 25673,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 14280,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 15260,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 16100,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 9849,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 12860,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 12492,
            "range": "± 5009",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 15699,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 17981,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 21522,
            "range": "± 895",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 205314,
            "range": "± 8423",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11919,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 17161,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8741,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 16509,
            "range": "± 3175",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 21446,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 21313,
            "range": "± 1512",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8890,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 43636,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 39360,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1346,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 3222,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 3340,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1959,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1944,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 2221,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1987,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 2064,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 2245,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 2181,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1881,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2981,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 5246,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 2270,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 3081,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1965,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1450,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1698,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1907,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 692,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 6133,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 5375,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 5543,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 20933,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1452498,
            "range": "± 109949",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 6282,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 6476,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 6620,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 12201,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 11980,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 17962,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 17728,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 11931,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1554233,
            "range": "± 54174",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 926496,
            "range": "± 44276",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 5605,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 5706,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 5200,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 5392,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6881,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 9486,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 674,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 933136,
            "range": "± 37905",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 842354,
            "range": "± 38529",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "6bebf2b0498b8153497c75840eb9eb6d34b1197e",
          "message": "testing",
          "timestamp": "2022-11-20T16:15:30-05:00",
          "tree_id": "927b8e8be6ae6c635abd3d13833d3259e7c814cf",
          "url": "https://github.com/blobcode/boa/commit/6bebf2b0498b8153497c75840eb9eb6d34b1197e"
        },
        "date": 1668979880001,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 353,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6360,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 20275,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 23343,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12920,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13856,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14758,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 9174,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 12000,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 11434,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 14269,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16630,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19849,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 186427,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10863,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15757,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8008,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 16071,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 20865,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 20327,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8203,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 40891,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 35627,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1216,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2908,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 3075,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1734,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1764,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1978,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1808,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1810,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 2006,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 2008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1696,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2612,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 5281,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 2100,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2678,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1650,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1193,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1240,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1620,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 671,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5631,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4893,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4926,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 19818,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1364150,
            "range": "± 32657",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 5814,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5999,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 6172,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 11044,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 11057,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 16284,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 16130,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 11228,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1598971,
            "range": "± 5092",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 953289,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 5051,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 5405,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4761,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4953,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6472,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 9099,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 710,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 884787,
            "range": "± 4067",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 822925,
            "range": "± 3622",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "committer": {
            "email": "lhelme123@gmail.com",
            "name": "blobcode",
            "username": "blobcode"
          },
          "distinct": true,
          "id": "a22cd86127f459a3c5a9e7d7c0f2e79b290130af",
          "message": "move miri to seperate step",
          "timestamp": "2022-11-20T16:21:58-05:00",
          "tree_id": "4dfbd672d2097a875988f0e0ed3e77a1d635f969",
          "url": "https://github.com/blobcode/boa/commit/a22cd86127f459a3c5a9e7d7c0f2e79b290130af"
        },
        "date": 1668980249566,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 335,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 5843,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 19074,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 20694,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 11571,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 12143,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 13537,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 8794,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 10963,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 10399,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13007,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 15251,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 17495,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 166493,
            "range": "± 15129",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 9713,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 14424,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 7376,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14128,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 18600,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 17926,
            "range": "± 1699",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 7438,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 35894,
            "range": "± 3618",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 32379,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1090,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2659,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 2846,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1571,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1536,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1730,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1507,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1687,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 1788,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 1804,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1510,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2287,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 4570,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 1792,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2339,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1464,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1060,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1136,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1454,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 607,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 4935,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4363,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4206,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 17486,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1223545,
            "range": "± 90771",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 4949,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5499,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 5773,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 10122,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 9978,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 13788,
            "range": "± 988",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14842,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 9847,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1554896,
            "range": "± 145679",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 880251,
            "range": "± 48499",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 4786,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 4911,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4317,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4451,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 5557,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 7942,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 640,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 777586,
            "range": "± 41186",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 728723,
            "range": "± 50315",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}