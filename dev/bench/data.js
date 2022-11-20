window.BENCHMARK_DATA = {
  "lastUpdate": 1668977745889,
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
      }
    ]
  }
}