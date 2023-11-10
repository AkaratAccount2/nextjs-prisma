
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model keep_alive
 * 
 */
export type keep_alive = $Result.DefaultSelection<Prisma.$keep_alivePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Keep_alives
 * const keep_alives = await prisma.keep_alive.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Keep_alives
   * const keep_alives = await prisma.keep_alive.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.keep_alive`: Exposes CRUD operations for the **keep_alive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keep_alives
    * const keep_alives = await prisma.keep_alive.findMany()
    * ```
    */
  get keep_alive(): Prisma.keep_aliveDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    keep_alive: 'keep_alive'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'keep_alive'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      keep_alive: {
        payload: Prisma.$keep_alivePayload<ExtArgs>
        fields: Prisma.keep_aliveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.keep_aliveFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.keep_aliveFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          findFirst: {
            args: Prisma.keep_aliveFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.keep_aliveFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          findMany: {
            args: Prisma.keep_aliveFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>[]
          }
          create: {
            args: Prisma.keep_aliveCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          createMany: {
            args: Prisma.keep_aliveCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.keep_aliveDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          update: {
            args: Prisma.keep_aliveUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          deleteMany: {
            args: Prisma.keep_aliveDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.keep_aliveUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.keep_aliveUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$keep_alivePayload>
          }
          aggregate: {
            args: Prisma.Keep_aliveAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKeep_alive>
          }
          groupBy: {
            args: Prisma.keep_aliveGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Keep_aliveGroupByOutputType>[]
          }
          count: {
            args: Prisma.keep_aliveCountArgs<ExtArgs>,
            result: $Utils.Optional<Keep_aliveCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model keep_alive
   */

  export type AggregateKeep_alive = {
    _count: Keep_aliveCountAggregateOutputType | null
    _avg: Keep_aliveAvgAggregateOutputType | null
    _sum: Keep_aliveSumAggregateOutputType | null
    _min: Keep_aliveMinAggregateOutputType | null
    _max: Keep_aliveMaxAggregateOutputType | null
  }

  export type Keep_aliveAvgAggregateOutputType = {
    id: number | null
  }

  export type Keep_aliveSumAggregateOutputType = {
    id: number | null
  }

  export type Keep_aliveMinAggregateOutputType = {
    id: number | null
    created: Date | null
  }

  export type Keep_aliveMaxAggregateOutputType = {
    id: number | null
    created: Date | null
  }

  export type Keep_aliveCountAggregateOutputType = {
    id: number
    created: number
    _all: number
  }


  export type Keep_aliveAvgAggregateInputType = {
    id?: true
  }

  export type Keep_aliveSumAggregateInputType = {
    id?: true
  }

  export type Keep_aliveMinAggregateInputType = {
    id?: true
    created?: true
  }

  export type Keep_aliveMaxAggregateInputType = {
    id?: true
    created?: true
  }

  export type Keep_aliveCountAggregateInputType = {
    id?: true
    created?: true
    _all?: true
  }

  export type Keep_aliveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keep_alive to aggregate.
     */
    where?: keep_aliveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keep_alives to fetch.
     */
    orderBy?: keep_aliveOrderByWithRelationInput | keep_aliveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: keep_aliveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keep_alives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keep_alives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned keep_alives
    **/
    _count?: true | Keep_aliveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Keep_aliveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Keep_aliveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Keep_aliveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Keep_aliveMaxAggregateInputType
  }

  export type GetKeep_aliveAggregateType<T extends Keep_aliveAggregateArgs> = {
        [P in keyof T & keyof AggregateKeep_alive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeep_alive[P]>
      : GetScalarType<T[P], AggregateKeep_alive[P]>
  }




  export type keep_aliveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keep_aliveWhereInput
    orderBy?: keep_aliveOrderByWithAggregationInput | keep_aliveOrderByWithAggregationInput[]
    by: Keep_aliveScalarFieldEnum[] | Keep_aliveScalarFieldEnum
    having?: keep_aliveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Keep_aliveCountAggregateInputType | true
    _avg?: Keep_aliveAvgAggregateInputType
    _sum?: Keep_aliveSumAggregateInputType
    _min?: Keep_aliveMinAggregateInputType
    _max?: Keep_aliveMaxAggregateInputType
  }

  export type Keep_aliveGroupByOutputType = {
    id: number
    created: Date
    _count: Keep_aliveCountAggregateOutputType | null
    _avg: Keep_aliveAvgAggregateOutputType | null
    _sum: Keep_aliveSumAggregateOutputType | null
    _min: Keep_aliveMinAggregateOutputType | null
    _max: Keep_aliveMaxAggregateOutputType | null
  }

  type GetKeep_aliveGroupByPayload<T extends keep_aliveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Keep_aliveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Keep_aliveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Keep_aliveGroupByOutputType[P]>
            : GetScalarType<T[P], Keep_aliveGroupByOutputType[P]>
        }
      >
    >


  export type keep_aliveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
  }, ExtArgs["result"]["keep_alive"]>

  export type keep_aliveSelectScalar = {
    id?: boolean
    created?: boolean
  }


  export type $keep_alivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "keep_alive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created: Date
    }, ExtArgs["result"]["keep_alive"]>
    composites: {}
  }


  type keep_aliveGetPayload<S extends boolean | null | undefined | keep_aliveDefaultArgs> = $Result.GetResult<Prisma.$keep_alivePayload, S>

  type keep_aliveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<keep_aliveFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Keep_aliveCountAggregateInputType | true
    }

  export interface keep_aliveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['keep_alive'], meta: { name: 'keep_alive' } }
    /**
     * Find zero or one Keep_alive that matches the filter.
     * @param {keep_aliveFindUniqueArgs} args - Arguments to find a Keep_alive
     * @example
     * // Get one Keep_alive
     * const keep_alive = await prisma.keep_alive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends keep_aliveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveFindUniqueArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Keep_alive that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {keep_aliveFindUniqueOrThrowArgs} args - Arguments to find a Keep_alive
     * @example
     * // Get one Keep_alive
     * const keep_alive = await prisma.keep_alive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends keep_aliveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Keep_alive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveFindFirstArgs} args - Arguments to find a Keep_alive
     * @example
     * // Get one Keep_alive
     * const keep_alive = await prisma.keep_alive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends keep_aliveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveFindFirstArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Keep_alive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveFindFirstOrThrowArgs} args - Arguments to find a Keep_alive
     * @example
     * // Get one Keep_alive
     * const keep_alive = await prisma.keep_alive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends keep_aliveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Keep_alives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keep_alives
     * const keep_alives = await prisma.keep_alive.findMany()
     * 
     * // Get first 10 Keep_alives
     * const keep_alives = await prisma.keep_alive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keep_aliveWithIdOnly = await prisma.keep_alive.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends keep_aliveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Keep_alive.
     * @param {keep_aliveCreateArgs} args - Arguments to create a Keep_alive.
     * @example
     * // Create one Keep_alive
     * const Keep_alive = await prisma.keep_alive.create({
     *   data: {
     *     // ... data to create a Keep_alive
     *   }
     * })
     * 
    **/
    create<T extends keep_aliveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveCreateArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Keep_alives.
     *     @param {keep_aliveCreateManyArgs} args - Arguments to create many Keep_alives.
     *     @example
     *     // Create many Keep_alives
     *     const keep_alive = await prisma.keep_alive.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends keep_aliveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keep_alive.
     * @param {keep_aliveDeleteArgs} args - Arguments to delete one Keep_alive.
     * @example
     * // Delete one Keep_alive
     * const Keep_alive = await prisma.keep_alive.delete({
     *   where: {
     *     // ... filter to delete one Keep_alive
     *   }
     * })
     * 
    **/
    delete<T extends keep_aliveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveDeleteArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Keep_alive.
     * @param {keep_aliveUpdateArgs} args - Arguments to update one Keep_alive.
     * @example
     * // Update one Keep_alive
     * const keep_alive = await prisma.keep_alive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends keep_aliveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveUpdateArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Keep_alives.
     * @param {keep_aliveDeleteManyArgs} args - Arguments to filter Keep_alives to delete.
     * @example
     * // Delete a few Keep_alives
     * const { count } = await prisma.keep_alive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends keep_aliveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, keep_aliveDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keep_alives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keep_alives
     * const keep_alive = await prisma.keep_alive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends keep_aliveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keep_alive.
     * @param {keep_aliveUpsertArgs} args - Arguments to update or create a Keep_alive.
     * @example
     * // Update or create a Keep_alive
     * const keep_alive = await prisma.keep_alive.upsert({
     *   create: {
     *     // ... data to create a Keep_alive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keep_alive we want to update
     *   }
     * })
    **/
    upsert<T extends keep_aliveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, keep_aliveUpsertArgs<ExtArgs>>
    ): Prisma__keep_aliveClient<$Result.GetResult<Prisma.$keep_alivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Keep_alives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveCountArgs} args - Arguments to filter Keep_alives to count.
     * @example
     * // Count the number of Keep_alives
     * const count = await prisma.keep_alive.count({
     *   where: {
     *     // ... the filter for the Keep_alives we want to count
     *   }
     * })
    **/
    count<T extends keep_aliveCountArgs>(
      args?: Subset<T, keep_aliveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Keep_aliveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keep_alive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Keep_aliveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Keep_aliveAggregateArgs>(args: Subset<T, Keep_aliveAggregateArgs>): Prisma.PrismaPromise<GetKeep_aliveAggregateType<T>>

    /**
     * Group by Keep_alive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keep_aliveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends keep_aliveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: keep_aliveGroupByArgs['orderBy'] }
        : { orderBy?: keep_aliveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, keep_aliveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeep_aliveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the keep_alive model
   */
  readonly fields: keep_aliveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for keep_alive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__keep_aliveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the keep_alive model
   */ 
  interface keep_aliveFieldRefs {
    readonly id: FieldRef<"keep_alive", 'Int'>
    readonly created: FieldRef<"keep_alive", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * keep_alive findUnique
   */
  export type keep_aliveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter, which keep_alive to fetch.
     */
    where: keep_aliveWhereUniqueInput
  }


  /**
   * keep_alive findUniqueOrThrow
   */
  export type keep_aliveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter, which keep_alive to fetch.
     */
    where: keep_aliveWhereUniqueInput
  }


  /**
   * keep_alive findFirst
   */
  export type keep_aliveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter, which keep_alive to fetch.
     */
    where?: keep_aliveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keep_alives to fetch.
     */
    orderBy?: keep_aliveOrderByWithRelationInput | keep_aliveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keep_alives.
     */
    cursor?: keep_aliveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keep_alives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keep_alives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keep_alives.
     */
    distinct?: Keep_aliveScalarFieldEnum | Keep_aliveScalarFieldEnum[]
  }


  /**
   * keep_alive findFirstOrThrow
   */
  export type keep_aliveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter, which keep_alive to fetch.
     */
    where?: keep_aliveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keep_alives to fetch.
     */
    orderBy?: keep_aliveOrderByWithRelationInput | keep_aliveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keep_alives.
     */
    cursor?: keep_aliveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keep_alives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keep_alives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keep_alives.
     */
    distinct?: Keep_aliveScalarFieldEnum | Keep_aliveScalarFieldEnum[]
  }


  /**
   * keep_alive findMany
   */
  export type keep_aliveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter, which keep_alives to fetch.
     */
    where?: keep_aliveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keep_alives to fetch.
     */
    orderBy?: keep_aliveOrderByWithRelationInput | keep_aliveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing keep_alives.
     */
    cursor?: keep_aliveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keep_alives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keep_alives.
     */
    skip?: number
    distinct?: Keep_aliveScalarFieldEnum | Keep_aliveScalarFieldEnum[]
  }


  /**
   * keep_alive create
   */
  export type keep_aliveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * The data needed to create a keep_alive.
     */
    data?: XOR<keep_aliveCreateInput, keep_aliveUncheckedCreateInput>
  }


  /**
   * keep_alive createMany
   */
  export type keep_aliveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many keep_alives.
     */
    data: keep_aliveCreateManyInput | keep_aliveCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * keep_alive update
   */
  export type keep_aliveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * The data needed to update a keep_alive.
     */
    data: XOR<keep_aliveUpdateInput, keep_aliveUncheckedUpdateInput>
    /**
     * Choose, which keep_alive to update.
     */
    where: keep_aliveWhereUniqueInput
  }


  /**
   * keep_alive updateMany
   */
  export type keep_aliveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update keep_alives.
     */
    data: XOR<keep_aliveUpdateManyMutationInput, keep_aliveUncheckedUpdateManyInput>
    /**
     * Filter which keep_alives to update
     */
    where?: keep_aliveWhereInput
  }


  /**
   * keep_alive upsert
   */
  export type keep_aliveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * The filter to search for the keep_alive to update in case it exists.
     */
    where: keep_aliveWhereUniqueInput
    /**
     * In case the keep_alive found by the `where` argument doesn't exist, create a new keep_alive with this data.
     */
    create: XOR<keep_aliveCreateInput, keep_aliveUncheckedCreateInput>
    /**
     * In case the keep_alive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<keep_aliveUpdateInput, keep_aliveUncheckedUpdateInput>
  }


  /**
   * keep_alive delete
   */
  export type keep_aliveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
    /**
     * Filter which keep_alive to delete.
     */
    where: keep_aliveWhereUniqueInput
  }


  /**
   * keep_alive deleteMany
   */
  export type keep_aliveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keep_alives to delete
     */
    where?: keep_aliveWhereInput
  }


  /**
   * keep_alive without action
   */
  export type keep_aliveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keep_alive
     */
    select?: keep_aliveSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Keep_aliveScalarFieldEnum: {
    id: 'id',
    created: 'created'
  };

  export type Keep_aliveScalarFieldEnum = (typeof Keep_aliveScalarFieldEnum)[keyof typeof Keep_aliveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type keep_aliveWhereInput = {
    AND?: keep_aliveWhereInput | keep_aliveWhereInput[]
    OR?: keep_aliveWhereInput[]
    NOT?: keep_aliveWhereInput | keep_aliveWhereInput[]
    id?: IntFilter<"keep_alive"> | number
    created?: DateTimeFilter<"keep_alive"> | Date | string
  }

  export type keep_aliveOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
  }

  export type keep_aliveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: keep_aliveWhereInput | keep_aliveWhereInput[]
    OR?: keep_aliveWhereInput[]
    NOT?: keep_aliveWhereInput | keep_aliveWhereInput[]
    created?: DateTimeFilter<"keep_alive"> | Date | string
  }, "id">

  export type keep_aliveOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    _count?: keep_aliveCountOrderByAggregateInput
    _avg?: keep_aliveAvgOrderByAggregateInput
    _max?: keep_aliveMaxOrderByAggregateInput
    _min?: keep_aliveMinOrderByAggregateInput
    _sum?: keep_aliveSumOrderByAggregateInput
  }

  export type keep_aliveScalarWhereWithAggregatesInput = {
    AND?: keep_aliveScalarWhereWithAggregatesInput | keep_aliveScalarWhereWithAggregatesInput[]
    OR?: keep_aliveScalarWhereWithAggregatesInput[]
    NOT?: keep_aliveScalarWhereWithAggregatesInput | keep_aliveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"keep_alive"> | number
    created?: DateTimeWithAggregatesFilter<"keep_alive"> | Date | string
  }

  export type keep_aliveCreateInput = {
    created?: Date | string
  }

  export type keep_aliveUncheckedCreateInput = {
    id?: number
    created?: Date | string
  }

  export type keep_aliveUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keep_aliveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keep_aliveCreateManyInput = {
    id?: number
    created?: Date | string
  }

  export type keep_aliveUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keep_aliveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type keep_aliveCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
  }

  export type keep_aliveAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type keep_aliveMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
  }

  export type keep_aliveMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
  }

  export type keep_aliveSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use keep_aliveDefaultArgs instead
     */
    export type keep_aliveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = keep_aliveDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}