# Changelog


## v1.30.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.29.0...v1.30.0)

### 🚀 Enhancements

- **#91:** Add `IfEquals<U,V,Do,Else>` ([f312f49](https://github.com/ashgw/ts-roids/commit/f312f49))

### 💅 Refactors

- **typedoc:** Turn `@private` marker to `@hidden` `@private` might be deprecated in future releases, plus `@hidden` exists anyway ([b5c77cc](https://github.com/ashgw/ts-roids/commit/b5c77cc))
- Rename `UniqueArray<Arr>` to `ArrayUnique<Arr>` ([a8f72ed](https://github.com/ashgw/ts-roids/commit/a8f72ed))

### 📖 Documentation

- Improve inline docs for immutable/mutable types ([2352386](https://github.com/ashgw/ts-roids/commit/2352386))
- Improve inline docs for array types ([a02d232](https://github.com/ashgw/ts-roids/commit/a02d232))

### 🏡 Chore

- Ignore `/docs` ([66e452a](https://github.com/ashgw/ts-roids/commit/66e452a))

### ✅ Tests

- Add more test cases for `ArrayIncludes` type ([fc75c13](https://github.com/ashgw/ts-roids/commit/fc75c13))

### 🤖 CI

- **#89:** Publish on tags ([8b4a34e](https://github.com/ashgw/ts-roids/commit/8b4a34e))
- **#90:** Add `docs` deployment action job ([f92316f](https://github.com/ashgw/ts-roids/commit/f92316f))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.29.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.28.0...v1.29.0)

### 🚀 Enhancements

- Add primitive types' type guards ([1bfaec5](https://github.com/ashgw/ts-roids/commit/1bfaec5))
- Add `IsTuple` ([874b5d5](https://github.com/ashgw/ts-roids/commit/874b5d5))
- **#86:** Add `IsAny` ([df12d61](https://github.com/ashgw/ts-roids/commit/df12d61))
- **#87:** Add `_MinInTwoNums<N1,N2>` ([5e5b06b](https://github.com/ashgw/ts-roids/commit/5e5b06b))
- **#88:** Add `ArrayMin<Arr>` ([513c186](https://github.com/ashgw/ts-roids/commit/513c186))

### 💅 Refactors

- Rename `test-vals.ts` to `vals.test.ts` ([a781f63](https://github.com/ashgw/ts-roids/commit/a781f63))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.28.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.27.1...v1.28.0)

### 🚀 Enhancements

- **#82:** Finish `ArrayIncludes<P>` ([c9a1189](https://github.com/ashgw/ts-roids/commit/c9a1189))
- **#83:** Finish `OmitByType<T,P>` ([ba431c4](https://github.com/ashgw/ts-roids/commit/ba431c4))

### 💅 Refactors

- Rename `Max` to `ArrayMax` ([59c70ae](https://github.com/ashgw/ts-roids/commit/59c70ae))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.27.1

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.27.0...v1.27.1)

### 🩹 Fixes

- Fix distorted readme ([3e5a673](https://github.com/ashgw/ts-roids/commit/3e5a673))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.27.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.26.0...v1.27.0)

### 🚀 Enhancements

- **#73:** Finish `Stringify<N>` ([760a76d](https://github.com/ashgw/ts-roids/commit/760a76d))
- **#72:** Finish `IsNegative<N>` ([83d3807](https://github.com/ashgw/ts-roids/commit/83d3807))
- **#71:** Finish `IsPositive<N>` ([9377caf](https://github.com/ashgw/ts-roids/commit/9377caf))
- **#70:** Finish `Abs<N>` ([683e8a8](https://github.com/ashgw/ts-roids/commit/683e8a8))
- **#69:** Finish `Strlen<S>` ([f810532](https://github.com/ashgw/ts-roids/commit/f810532))
- **#79:** Finish `EqualStrlen<S1,S2>` ([2e19abd](https://github.com/ashgw/ts-roids/commit/2e19abd))
- **#76:** Finish `_MinInTwoPositiveNums<N1,N2>` ([cf50397](https://github.com/ashgw/ts-roids/commit/cf50397))
- **#74:** Finish `_MaxInTwoPositiveNums<N1,N2>` ([af65dfd](https://github.com/ashgw/ts-roids/commit/af65dfd))
- **#74:** Finish `MaxInTwoNums<N1,N2>` ([47728ea](https://github.com/ashgw/ts-roids/commit/47728ea))
- **#77:** Finish `Max<Arr>` ([f67825f](https://github.com/ashgw/ts-roids/commit/f67825f))
- **#80:** Finish `IsInteger<Arr>` ([c8190c4](https://github.com/ashgw/ts-roids/commit/c8190c4))
- **#81:** Finish `IsFloat<Arr>` ([52d5caf](https://github.com/ashgw/ts-roids/commit/52d5caf))
- Add `Integer` & `Float` types ([376dc8d](https://github.com/ashgw/ts-roids/commit/376dc8d))

### 🩹 Fixes

- Add  for test files that don't ([ab6bb9f](https://github.com/ashgw/ts-roids/commit/ab6bb9f))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.26.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.25.0...v1.26.0)

### 🚀 Enhancements

- Add `testType()` ([dbbf0f7](https://github.com/ashgw/ts-roids/commit/dbbf0f7))
- Add `RequiredKeys<T>` ([ea1353a](https://github.com/ashgw/ts-roids/commit/ea1353a))
- Add `NonRequiredKeys<T>` ([da3b4a2](https://github.com/ashgw/ts-roids/commit/da3b4a2))

### 🏡 Chore

- Do not expot `@finalMethod` ([8736176](https://github.com/ashgw/ts-roids/commit/8736176))
- **#27:** Format on save ([d2d2ae2](https://github.com/ashgw/ts-roids/commit/d2d2ae2))
- Clean up `array-filter.test.ts` ([752397c](https://github.com/ashgw/ts-roids/commit/752397c))

### 🤖 CI

- **#30:** Add branch protection CI check ([af2ef26](https://github.com/ashgw/ts-roids/commit/af2ef26))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.25.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.24.0...v1.25.0)

### 🚀 Enhancements

- **#59:** Finish `DeepPick<T,P>` ([315b479](https://github.com/ashgw/ts-roids/commit/315b479))

### 🩹 Fixes

- Husky bug runs tests when it is set to lint ([c918b65](https://github.com/ashgw/ts-roids/commit/c918b65))

### 📖 Documentation

- Add docs for final decorators ([d24c700](https://github.com/ashgw/ts-roids/commit/d24c700))

### ✅ Tests

- `DeepPick<T,P>` ([037dba8](https://github.com/ashgw/ts-roids/commit/037dba8))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.24.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.23.0...v1.24.0)

### 🚀 Enhancements

- **#64:** Add `@FinalClass` ([37a5049](https://github.com/ashgw/ts-roids/commit/37a5049))
- Set the prototype for `@finalMethod` ([057b542](https://github.com/ashgw/ts-roids/commit/057b542))
- **#66:** Add `@Frozen` ([b2c234c](https://github.com/ashgw/ts-roids/commit/b2c234c))

### 🏡 Chore

- Create `FinalClassTypeError` This is here to differentiate between different type error types ([83e7880](https://github.com/ashgw/ts-roids/commit/83e7880))
- Cleanup docs ([d14a223](https://github.com/ashgw/ts-roids/commit/d14a223))
- Cleanup docs ([96a6663](https://github.com/ashgw/ts-roids/commit/96a6663))

### ✅ Tests

- Add an instantiation test case for final classes decorator ([3eec6fb](https://github.com/ashgw/ts-roids/commit/3eec6fb))
- Add testing for final classes with abstract classes ([303855e](https://github.com/ashgw/ts-roids/commit/303855e))
- Both `@Frozen` with `@Final` ([4b132c1](https://github.com/ashgw/ts-roids/commit/4b132c1))

### 🤖 CI

- Lint all for pre-commit ([aeef8c0](https://github.com/ashgw/ts-roids/commit/aeef8c0))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.23.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.21.0...v1.23.0)

### 🚀 Enhancements

- **#56:** Finish `KeysToValues<T>` ([2bcc390](https://github.com/ashgw/ts-roids/commit/2bcc390))
- **#57:** Finish `Filter<T,P>` ([a646c31](https://github.com/ashgw/ts-roids/commit/a646c31))

### 📖 Documentation

- Add `NewType` example to `README` ([abd304e](https://github.com/ashgw/ts-roids/commit/abd304e))
- Enhance documentation for `NewType<N,T>` ([affd9b3](https://github.com/ashgw/ts-roids/commit/affd9b3))
- Solves  Inform users they have to set "experimentalDecorators": true if they want to use decorators ([#67](https://github.com/ashgw/ts-roids/pull/67))

### 📦 Build

- **vitest:** Add istanbul for coverage ([fc6e283](https://github.com/ashgw/ts-roids/commit/fc6e283))

### 🏡 Chore

- Cleanup docs ([7414c31](https://github.com/ashgw/ts-roids/commit/7414c31))
- **release:** V1.22.0 ([a3d2171](https://github.com/ashgw/ts-roids/commit/a3d2171))

### 🤖 CI

- Add "possible fix" label for bug issue template ([4f80086](https://github.com/ashgw/ts-roids/commit/4f80086))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.22.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.21.0...v1.22.0)

### 🚀 Enhancements

- **#56:** Finish `KeysToValues<T>` ([2bcc390](https://github.com/ashgw/ts-roids/commit/2bcc390))

### 🏡 Chore

- Cleanup docs ([7414c31](https://github.com/ashgw/ts-roids/commit/7414c31))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.21.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.17.0...v1.21.0)

### 🚀 Enhancements

- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([17482f9](https://github.com/ashgw/ts-roids/commit/17482f9))
- Set `IfExtends` ([a1625d0](https://github.com/ashgw/ts-roids/commit/a1625d0))
- **#54:** Finish `DeepOmit<T,SL>` ([65ab454](https://github.com/ashgw/ts-roids/commit/65ab454))

### 🏡 Chore

- **release:** V1.18.0 ([68f1d2d](https://github.com/ashgw/ts-roids/commit/68f1d2d))
- Cleanup source file ([fd40124](https://github.com/ashgw/ts-roids/commit/fd40124))
- Cleanup ([e384ba9](https://github.com/ashgw/ts-roids/commit/e384ba9))
- Cleanup ([33e7560](https://github.com/ashgw/ts-roids/commit/33e7560))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.20.1

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.17.0...v1.20.1)

### 🚀 Enhancements

- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([17482f9](https://github.com/ashgw/ts-roids/commit/17482f9))
- Set `IfExtends` ([a1625d0](https://github.com/ashgw/ts-roids/commit/a1625d0))

### 🏡 Chore

- **release:** V1.18.0 ([68f1d2d](https://github.com/ashgw/ts-roids/commit/68f1d2d))
- Cleanup source file ([fd40124](https://github.com/ashgw/ts-roids/commit/fd40124))
- Cleanup ([e384ba9](https://github.com/ashgw/ts-roids/commit/e384ba9))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.20.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.17.0...v1.20.0)

### 🚀 Enhancements

- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([17482f9](https://github.com/ashgw/ts-roids/commit/17482f9))
- Set `IfExtends` ([a1625d0](https://github.com/ashgw/ts-roids/commit/a1625d0))

### 🏡 Chore

- **release:** V1.18.0 ([68f1d2d](https://github.com/ashgw/ts-roids/commit/68f1d2d))
- Cleanup source file ([fd40124](https://github.com/ashgw/ts-roids/commit/fd40124))
- Cleanup ([e384ba9](https://github.com/ashgw/ts-roids/commit/e384ba9))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.19.1

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.17.0...v1.19.1)

### 🚀 Enhancements

- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([17482f9](https://github.com/ashgw/ts-roids/commit/17482f9))
- Set `IfExtends` ([a1625d0](https://github.com/ashgw/ts-roids/commit/a1625d0))

### 🏡 Chore

- **release:** V1.18.0 ([68f1d2d](https://github.com/ashgw/ts-roids/commit/68f1d2d))
- Cleanup source file ([fd40124](https://github.com/ashgw/ts-roids/commit/fd40124))
- Cleanup ([e384ba9](https://github.com/ashgw/ts-roids/commit/e384ba9))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.19.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.17.0...v1.19.0)

### 🚀 Enhancements

- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([17482f9](https://github.com/ashgw/ts-roids/commit/17482f9))
- Set `IfExtends` ([a1625d0](https://github.com/ashgw/ts-roids/commit/a1625d0))

### 🏡 Chore

- **release:** V1.18.0 ([68f1d2d](https://github.com/ashgw/ts-roids/commit/68f1d2d))
- Cleanup source file ([fd40124](https://github.com/ashgw/ts-roids/commit/fd40124))
- Cleanup ([e384ba9](https://github.com/ashgw/ts-roids/commit/e384ba9))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.18.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.16.0...v1.18.0)

### 🚀 Enhancements

- **#50:** Finish `UniqueArray<T>` ([d713ccc](https://github.com/ashgw/ts-roids/commit/d713ccc))
- **#52:** Finish  `ImmutableKeys` & `MutableKeys` ([cebb07e](https://github.com/ashgw/ts-roids/commit/cebb07e))

### 🏡 Chore

- **release:** V1.17.0 ([71399b1](https://github.com/ashgw/ts-roids/commit/71399b1))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.17.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.16.0...v1.17.0)

### 🚀 Enhancements

- **#50:** Finish `UniqueArray<T>` ([d713ccc](https://github.com/ashgw/ts-roids/commit/d713ccc))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.16.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.14.0...v1.16.0)

### 🚀 Enhancements

- **#51:** Finish `IsInArray<T,E>` ([988d33a](https://github.com/ashgw/ts-roids/commit/988d33a))
- **#50:** Finish `UniqueArray<T>` ([1c0105f](https://github.com/ashgw/ts-roids/commit/1c0105f))

### 💅 Refactors

- Rename `FilterArray<T,P>` to `ArrayFilter<T,P>` for ease of imports ([075a966](https://github.com/ashgw/ts-roids/commit/075a966))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.15.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.14.0...v1.15.0)

### 🚀 Enhancements

- **#51:** Finish `IsInArray<T,E>` ([988d33a](https://github.com/ashgw/ts-roids/commit/988d33a))

### 💅 Refactors

- Rename `FilterArray<T,P>` to `ArrayFilter<T,P>` for ease of imports ([075a966](https://github.com/ashgw/ts-roids/commit/075a966))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.14.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.13.0...v1.14.0)

### 🚀 Enhancements

- **#49:** Finsih `NewType<T>` ([c48abce](https://github.com/ashgw/ts-roids/commit/c48abce))

### 💅 Refactors

- Rename `Filter<T,P>` to `FilterArray<T,P>` ([2fa5e3d](https://github.com/ashgw/ts-roids/commit/2fa5e3d))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.13.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.12.0...v1.13.0)

### 🚀 Enhancements

- **#45:** Finish `Filter<T,P>` ([3fc6c13](https://github.com/ashgw/ts-roids/commit/3fc6c13))

### ✅ Tests

- **#46:** Start using the native   instead of  's test types ([9de73aa](https://github.com/ashgw/ts-roids/commit/9de73aa))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.12.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.11.0...v1.12.0)

### 🚀 Enhancements

- **#43:** Add `TestType` ([935cef3](https://github.com/ashgw/ts-roids/commit/935cef3))

### 📦 Build

- **eslint:** Allow any ([c2d8157](https://github.com/ashgw/ts-roids/commit/c2d8157))

### 🏡 Chore

- Setup PoC for all types ([efbcb07](https://github.com/ashgw/ts-roids/commit/efbcb07))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.11.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.10.0...v1.11.0)

### 🚀 Enhancements

- Finish `OneOrMany` ([45d3d90](https://github.com/ashgw/ts-roids/commit/45d3d90))

### ❤️ Contributors

- AshGw <AshrefGw@proton.me>

## v1.10.0

[compare changes](https://github.com/ashgw/ts-roids/compare/v1.9.0...v1.10.0)

### 🚀 Enhancements

- Finish `Vals` ([4c95569](https://github.com/ashgw/ts-roids/commit/4c95569))

### 💅 Refactors

- Change lib name to `ts-roids` ([a0cd2c5](https://github.com/ashgw/ts-roids/commit/a0cd2c5))

### 🤖 CI

- Publish to `npm` ([1c14e87](https://github.com/ashgw/ts-roids/commit/1c14e87))
- **just:** Add `j f` alias ([531ae8a](https://github.com/ashgw/ts-roids/commit/531ae8a))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.9.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.8.0...v1.9.0)

### 🚀 Enhancements

- Finish `Keys` ([81503b5](https://github.com/ashgw/ts-extended/commit/81503b5))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.8.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.7.0...v1.8.0)

### 🚀 Enhancements

- **#37:** Finish `IsUnknown` ([2e85b89](https://github.com/ashgw/ts-extended/commit/2e85b89))

### 💅 Refactors

- Rename `release.yaml` to `ci.yaml` ([064e0da](https://github.com/ashgw/ts-extended/commit/064e0da))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.7.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.6.0...v1.7.0)

### 🚀 Enhancements

- **#36:** Finish `IsNever` ([fa62b73](https://github.com/ashgw/ts-extended/commit/fa62b73))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.6.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.5.0...v1.6.0)

### 🚀 Enhancements

- **#35:** Finish `IsTruthy` ([ae683cf](https://github.com/ashgw/ts-extended/commit/ae683cf))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.5.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.4.0...v1.5.0)

### 🚀 Enhancements

- **#34:** Finish `IsFalsy` ([6d70fa9](https://github.com/ashgw/ts-extended/commit/6d70fa9))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.4.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.3.0...v1.4.0)

### 🚀 Enhancements

- **#33:** Finish `Falsy` ([216e73b](https://github.com/ashgw/ts-extended/commit/216e73b))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.3.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.1.0...v1.3.0)

### 🚀 Enhancements

- **#32:** Finish `Primitive` ([1f1d979](https://github.com/ashgw/ts-extended/commit/1f1d979))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.2.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- Finish `Numeric` type ([487ef42](https://github.com/ashgw/ts-extended/commit/487ef42))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v1.1.0

[compare changes](https://github.com/ashgw/ts-extended/compare/v0.0.1...v1.1.0)

### 🚀 Enhancements

- Add `MaybeUndefined` ([4390496](https://github.com/ashgw/ts-extended/commit/4390496))
- Add `Numeric` type ([0eea785](https://github.com/ashgw/ts-extended/commit/0eea785))
- Add `Primitive` type ([af76189](https://github.com/ashgw/ts-extended/commit/af76189))
- Add `Falsy` type ([3ea0bd9](https://github.com/ashgw/ts-extended/commit/3ea0bd9))
- Add `IsFalsy` type ([587793b](https://github.com/ashgw/ts-extended/commit/587793b))
- Add `IsTruthy` type ([911ec24](https://github.com/ashgw/ts-extended/commit/911ec24))
- Add `IsNever` type ([2b75bdb](https://github.com/ashgw/ts-extended/commit/2b75bdb))
- Add `IsUnknown` type ([63e134d](https://github.com/ashgw/ts-extended/commit/63e134d))
- Add `Keys` type ([0fed916](https://github.com/ashgw/ts-extended/commit/0fed916))
- Add `Vals` type ([66f812d](https://github.com/ashgw/ts-extended/commit/66f812d))
- Add `OneOrMany` type ([1dd352f](https://github.com/ashgw/ts-extended/commit/1dd352f))
- Add `MaybeUndefined` type ([cbef3fd](https://github.com/ashgw/ts-extended/commit/cbef3fd))
- Add `Newable` type ([6dc2571](https://github.com/ashgw/ts-extended/commit/6dc2571))
- Finish `Nullable` type ([3607191](https://github.com/ashgw/ts-extended/commit/3607191))

### 🩹 Fixes

- **gh-actions:** Typo ([fabf418](https://github.com/ashgw/ts-extended/commit/fabf418))
- **actions:** Major typo ([c58c8a6](https://github.com/ashgw/ts-extended/commit/c58c8a6))
- **actions:** Major typo ([0c609d0](https://github.com/ashgw/ts-extended/commit/0c609d0))
- "any" problem ([6cfe74e](https://github.com/ashgw/ts-extended/commit/6cfe74e))

### 🏡 Chore

- **prettier:** Ignore more files ([2732444](https://github.com/ashgw/ts-extended/commit/2732444))
- **prettierrc:** Cleanup ([2b813cd](https://github.com/ashgw/ts-extended/commit/2b813cd))
- Add more works to the dictionary ([a4fe852](https://github.com/ashgw/ts-extended/commit/a4fe852))

### 🤖 CI

- Fix yaml typo ([1065590](https://github.com/ashgw/ts-extended/commit/1065590))
- Add actions ([776f0c7](https://github.com/ashgw/ts-extended/commit/776f0c7))
- Run all lints as a pre-commit hook ([170f08f](https://github.com/ashgw/ts-extended/commit/170f08f))
- Ommit publishing for 24hrs ([e4349cc](https://github.com/ashgw/ts-extended/commit/e4349cc))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))

## v0.0.1


### 📖 Documentation

- Add example ([0b85ede](https://github.com/ashgw/ts-extended/commit/0b85ede))
- Enhance example ([5eb7c7e](https://github.com/ashgw/ts-extended/commit/5eb7c7e))

### 📦 Build

- Initial commit ([b9f62e1](https://github.com/ashgw/ts-extended/commit/b9f62e1))
- **#21:** Setup `rollup` ([6b4b562](https://github.com/ashgw/ts-extended/commit/6b4b562))
- **#20:** Set typescript configs ([a0a5ec5](https://github.com/ashgw/ts-extended/commit/a0a5ec5))
- **#20:** Configure TS ([20d485a](https://github.com/ashgw/ts-extended/commit/20d485a))
- **#22:** Setup project metadata ([557fe62](https://github.com/ashgw/ts-extended/commit/557fe62))
- **#16:** Setup inital `cspell` config file ([decafa4](https://github.com/ashgw/ts-extended/commit/decafa4))
- **#16:** Setup `knip` ([5d4e66a](https://github.com/ashgw/ts-extended/commit/5d4e66a))
- **#6:** Setup vitest ([40f99fe](https://github.com/ashgw/ts-extended/commit/40f99fe))
- **#26:** Allow decorators feature ([0e65ccb](https://github.com/ashgw/ts-extended/commit/0e65ccb))
- Setup npmrc file ([1f6a260](https://github.com/ashgw/ts-extended/commit/1f6a260))
- Use node `v20.9.0` ([e36f96b](https://github.com/ashgw/ts-extended/commit/e36f96b))
- **#28:** Use node `v18.17.0` ([eef6624](https://github.com/ashgw/ts-extended/commit/eef6624))
- **#11:** Setup linter ([c191d43](https://github.com/ashgw/ts-extended/commit/c191d43))
- **#10:** Set formatter ([fc4c165](https://github.com/ashgw/ts-extended/commit/fc4c165))

### 🏡 Chore

- **#16:** `cspell` dictionary ([ae8896b](https://github.com/ashgw/ts-extended/commit/ae8896b))
- Ignore `/build` & `/coverage` ([c15cfe3](https://github.com/ashgw/ts-extended/commit/c15cfe3))
- Setup .gitattributes ([ef9d7fd](https://github.com/ashgw/ts-extended/commit/ef9d7fd))
- Set editor confs ([bf9bef2](https://github.com/ashgw/ts-extended/commit/bf9bef2))
- **#27:** Format one save ([2362087](https://github.com/ashgw/ts-extended/commit/2362087))
- Setup skeleton ([f048a4c](https://github.com/ashgw/ts-extended/commit/f048a4c))
- Add `Nullable` type test ([83ce1bd](https://github.com/ashgw/ts-extended/commit/83ce1bd))

### 🤖 CI

- **#12:** Add `codeowners` ([8c5e38e](https://github.com/ashgw/ts-extended/commit/8c5e38e))
- **#5:** Setup `husky` ([d1c64a1](https://github.com/ashgw/ts-extended/commit/d1c64a1))
- **#24:** Use `just` ([15cf86a](https://github.com/ashgw/ts-extended/commit/15cf86a))
- **#17:** Use the renovate bot ([5ec5362](https://github.com/ashgw/ts-extended/commit/5ec5362))
- **#7:** Setup conventional commits ([dba5296](https://github.com/ashgw/ts-extended/commit/dba5296))
- Setup issue templates ([15d4366](https://github.com/ashgw/ts-extended/commit/15d4366))
- Setup action prepare step ([0a62f5f](https://github.com/ashgw/ts-extended/commit/0a62f5f))
- **#29:** Setup workflows ([454d132](https://github.com/ashgw/ts-extended/commit/454d132))
- **#29:** Setup release workflow, publish on tag ([b61102b](https://github.com/ashgw/ts-extended/commit/b61102b))
- **#29:** Update workflows ([29167f1](https://github.com/ashgw/ts-extended/commit/29167f1))

### ❤️ Contributors

- AshGw ([@AshGw](http://github.com/AshGw))
- Ashref Gwader ([@AshGw](http://github.com/AshGw))

