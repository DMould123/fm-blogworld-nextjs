
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FMBlogPost
 * 
 */
export type FMBlogPost = $Result.DefaultSelection<Prisma.$FMBlogPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FMBlogPosts
 * const fMBlogPosts = await prisma.fMBlogPost.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more FMBlogPosts
   * const fMBlogPosts = await prisma.fMBlogPost.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fMBlogPost`: Exposes CRUD operations for the **FMBlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FMBlogPosts
    * const fMBlogPosts = await prisma.fMBlogPost.findMany()
    * ```
    */
  get fMBlogPost(): Prisma.FMBlogPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    FMBlogPost: 'FMBlogPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fMBlogPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FMBlogPost: {
        payload: Prisma.$FMBlogPostPayload<ExtArgs>
        fields: Prisma.FMBlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FMBlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FMBlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          findFirst: {
            args: Prisma.FMBlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FMBlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          findMany: {
            args: Prisma.FMBlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>[]
          }
          create: {
            args: Prisma.FMBlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          createMany: {
            args: Prisma.FMBlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FMBlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>[]
          }
          delete: {
            args: Prisma.FMBlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          update: {
            args: Prisma.FMBlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          deleteMany: {
            args: Prisma.FMBlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FMBlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FMBlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>[]
          }
          upsert: {
            args: Prisma.FMBlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FMBlogPostPayload>
          }
          aggregate: {
            args: Prisma.FMBlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFMBlogPost>
          }
          groupBy: {
            args: Prisma.FMBlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<FMBlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.FMBlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<FMBlogPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fMBlogPost?: FMBlogPostOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Model FMBlogPost
   */

  export type AggregateFMBlogPost = {
    _count: FMBlogPostCountAggregateOutputType | null
    _min: FMBlogPostMinAggregateOutputType | null
    _max: FMBlogPostMaxAggregateOutputType | null
  }

  export type FMBlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    authorImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FMBlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    authorImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FMBlogPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    authorName: number
    authorImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FMBlogPostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    authorImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FMBlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    authorImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FMBlogPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    authorImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FMBlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FMBlogPost to aggregate.
     */
    where?: FMBlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FMBlogPosts to fetch.
     */
    orderBy?: FMBlogPostOrderByWithRelationInput | FMBlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FMBlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FMBlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FMBlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FMBlogPosts
    **/
    _count?: true | FMBlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FMBlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FMBlogPostMaxAggregateInputType
  }

  export type GetFMBlogPostAggregateType<T extends FMBlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateFMBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFMBlogPost[P]>
      : GetScalarType<T[P], AggregateFMBlogPost[P]>
  }




  export type FMBlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FMBlogPostWhereInput
    orderBy?: FMBlogPostOrderByWithAggregationInput | FMBlogPostOrderByWithAggregationInput[]
    by: FMBlogPostScalarFieldEnum[] | FMBlogPostScalarFieldEnum
    having?: FMBlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FMBlogPostCountAggregateInputType | true
    _min?: FMBlogPostMinAggregateInputType
    _max?: FMBlogPostMaxAggregateInputType
  }

  export type FMBlogPostGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    authorName: string
    authorImage: string
    createdAt: Date
    updatedAt: Date
    _count: FMBlogPostCountAggregateOutputType | null
    _min: FMBlogPostMinAggregateOutputType | null
    _max: FMBlogPostMaxAggregateOutputType | null
  }

  type GetFMBlogPostGroupByPayload<T extends FMBlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FMBlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FMBlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FMBlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], FMBlogPostGroupByOutputType[P]>
        }
      >
    >


  export type FMBlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    authorImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fMBlogPost"]>

  export type FMBlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    authorImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fMBlogPost"]>

  export type FMBlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    authorImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fMBlogPost"]>

  export type FMBlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    authorImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FMBlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "authorName" | "authorImage" | "createdAt" | "updatedAt", ExtArgs["result"]["fMBlogPost"]>

  export type $FMBlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FMBlogPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      authorId: string
      authorName: string
      authorImage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fMBlogPost"]>
    composites: {}
  }

  type FMBlogPostGetPayload<S extends boolean | null | undefined | FMBlogPostDefaultArgs> = $Result.GetResult<Prisma.$FMBlogPostPayload, S>

  type FMBlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FMBlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FMBlogPostCountAggregateInputType | true
    }

  export interface FMBlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FMBlogPost'], meta: { name: 'FMBlogPost' } }
    /**
     * Find zero or one FMBlogPost that matches the filter.
     * @param {FMBlogPostFindUniqueArgs} args - Arguments to find a FMBlogPost
     * @example
     * // Get one FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FMBlogPostFindUniqueArgs>(args: SelectSubset<T, FMBlogPostFindUniqueArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FMBlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FMBlogPostFindUniqueOrThrowArgs} args - Arguments to find a FMBlogPost
     * @example
     * // Get one FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FMBlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, FMBlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FMBlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostFindFirstArgs} args - Arguments to find a FMBlogPost
     * @example
     * // Get one FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FMBlogPostFindFirstArgs>(args?: SelectSubset<T, FMBlogPostFindFirstArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FMBlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostFindFirstOrThrowArgs} args - Arguments to find a FMBlogPost
     * @example
     * // Get one FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FMBlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, FMBlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FMBlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FMBlogPosts
     * const fMBlogPosts = await prisma.fMBlogPost.findMany()
     * 
     * // Get first 10 FMBlogPosts
     * const fMBlogPosts = await prisma.fMBlogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fMBlogPostWithIdOnly = await prisma.fMBlogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FMBlogPostFindManyArgs>(args?: SelectSubset<T, FMBlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FMBlogPost.
     * @param {FMBlogPostCreateArgs} args - Arguments to create a FMBlogPost.
     * @example
     * // Create one FMBlogPost
     * const FMBlogPost = await prisma.fMBlogPost.create({
     *   data: {
     *     // ... data to create a FMBlogPost
     *   }
     * })
     * 
     */
    create<T extends FMBlogPostCreateArgs>(args: SelectSubset<T, FMBlogPostCreateArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FMBlogPosts.
     * @param {FMBlogPostCreateManyArgs} args - Arguments to create many FMBlogPosts.
     * @example
     * // Create many FMBlogPosts
     * const fMBlogPost = await prisma.fMBlogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FMBlogPostCreateManyArgs>(args?: SelectSubset<T, FMBlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FMBlogPosts and returns the data saved in the database.
     * @param {FMBlogPostCreateManyAndReturnArgs} args - Arguments to create many FMBlogPosts.
     * @example
     * // Create many FMBlogPosts
     * const fMBlogPost = await prisma.fMBlogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FMBlogPosts and only return the `id`
     * const fMBlogPostWithIdOnly = await prisma.fMBlogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FMBlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, FMBlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FMBlogPost.
     * @param {FMBlogPostDeleteArgs} args - Arguments to delete one FMBlogPost.
     * @example
     * // Delete one FMBlogPost
     * const FMBlogPost = await prisma.fMBlogPost.delete({
     *   where: {
     *     // ... filter to delete one FMBlogPost
     *   }
     * })
     * 
     */
    delete<T extends FMBlogPostDeleteArgs>(args: SelectSubset<T, FMBlogPostDeleteArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FMBlogPost.
     * @param {FMBlogPostUpdateArgs} args - Arguments to update one FMBlogPost.
     * @example
     * // Update one FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FMBlogPostUpdateArgs>(args: SelectSubset<T, FMBlogPostUpdateArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FMBlogPosts.
     * @param {FMBlogPostDeleteManyArgs} args - Arguments to filter FMBlogPosts to delete.
     * @example
     * // Delete a few FMBlogPosts
     * const { count } = await prisma.fMBlogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FMBlogPostDeleteManyArgs>(args?: SelectSubset<T, FMBlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FMBlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FMBlogPosts
     * const fMBlogPost = await prisma.fMBlogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FMBlogPostUpdateManyArgs>(args: SelectSubset<T, FMBlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FMBlogPosts and returns the data updated in the database.
     * @param {FMBlogPostUpdateManyAndReturnArgs} args - Arguments to update many FMBlogPosts.
     * @example
     * // Update many FMBlogPosts
     * const fMBlogPost = await prisma.fMBlogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FMBlogPosts and only return the `id`
     * const fMBlogPostWithIdOnly = await prisma.fMBlogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FMBlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, FMBlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FMBlogPost.
     * @param {FMBlogPostUpsertArgs} args - Arguments to update or create a FMBlogPost.
     * @example
     * // Update or create a FMBlogPost
     * const fMBlogPost = await prisma.fMBlogPost.upsert({
     *   create: {
     *     // ... data to create a FMBlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FMBlogPost we want to update
     *   }
     * })
     */
    upsert<T extends FMBlogPostUpsertArgs>(args: SelectSubset<T, FMBlogPostUpsertArgs<ExtArgs>>): Prisma__FMBlogPostClient<$Result.GetResult<Prisma.$FMBlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FMBlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostCountArgs} args - Arguments to filter FMBlogPosts to count.
     * @example
     * // Count the number of FMBlogPosts
     * const count = await prisma.fMBlogPost.count({
     *   where: {
     *     // ... the filter for the FMBlogPosts we want to count
     *   }
     * })
    **/
    count<T extends FMBlogPostCountArgs>(
      args?: Subset<T, FMBlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FMBlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FMBlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FMBlogPostAggregateArgs>(args: Subset<T, FMBlogPostAggregateArgs>): Prisma.PrismaPromise<GetFMBlogPostAggregateType<T>>

    /**
     * Group by FMBlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FMBlogPostGroupByArgs} args - Group by arguments.
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
      T extends FMBlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FMBlogPostGroupByArgs['orderBy'] }
        : { orderBy?: FMBlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FMBlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFMBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FMBlogPost model
   */
  readonly fields: FMBlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FMBlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FMBlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FMBlogPost model
   */
  interface FMBlogPostFieldRefs {
    readonly id: FieldRef<"FMBlogPost", 'String'>
    readonly title: FieldRef<"FMBlogPost", 'String'>
    readonly content: FieldRef<"FMBlogPost", 'String'>
    readonly authorId: FieldRef<"FMBlogPost", 'String'>
    readonly authorName: FieldRef<"FMBlogPost", 'String'>
    readonly authorImage: FieldRef<"FMBlogPost", 'String'>
    readonly createdAt: FieldRef<"FMBlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"FMBlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FMBlogPost findUnique
   */
  export type FMBlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter, which FMBlogPost to fetch.
     */
    where: FMBlogPostWhereUniqueInput
  }

  /**
   * FMBlogPost findUniqueOrThrow
   */
  export type FMBlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter, which FMBlogPost to fetch.
     */
    where: FMBlogPostWhereUniqueInput
  }

  /**
   * FMBlogPost findFirst
   */
  export type FMBlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter, which FMBlogPost to fetch.
     */
    where?: FMBlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FMBlogPosts to fetch.
     */
    orderBy?: FMBlogPostOrderByWithRelationInput | FMBlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FMBlogPosts.
     */
    cursor?: FMBlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FMBlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FMBlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FMBlogPosts.
     */
    distinct?: FMBlogPostScalarFieldEnum | FMBlogPostScalarFieldEnum[]
  }

  /**
   * FMBlogPost findFirstOrThrow
   */
  export type FMBlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter, which FMBlogPost to fetch.
     */
    where?: FMBlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FMBlogPosts to fetch.
     */
    orderBy?: FMBlogPostOrderByWithRelationInput | FMBlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FMBlogPosts.
     */
    cursor?: FMBlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FMBlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FMBlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FMBlogPosts.
     */
    distinct?: FMBlogPostScalarFieldEnum | FMBlogPostScalarFieldEnum[]
  }

  /**
   * FMBlogPost findMany
   */
  export type FMBlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter, which FMBlogPosts to fetch.
     */
    where?: FMBlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FMBlogPosts to fetch.
     */
    orderBy?: FMBlogPostOrderByWithRelationInput | FMBlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FMBlogPosts.
     */
    cursor?: FMBlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FMBlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FMBlogPosts.
     */
    skip?: number
    distinct?: FMBlogPostScalarFieldEnum | FMBlogPostScalarFieldEnum[]
  }

  /**
   * FMBlogPost create
   */
  export type FMBlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * The data needed to create a FMBlogPost.
     */
    data: XOR<FMBlogPostCreateInput, FMBlogPostUncheckedCreateInput>
  }

  /**
   * FMBlogPost createMany
   */
  export type FMBlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FMBlogPosts.
     */
    data: FMBlogPostCreateManyInput | FMBlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FMBlogPost createManyAndReturn
   */
  export type FMBlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many FMBlogPosts.
     */
    data: FMBlogPostCreateManyInput | FMBlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FMBlogPost update
   */
  export type FMBlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * The data needed to update a FMBlogPost.
     */
    data: XOR<FMBlogPostUpdateInput, FMBlogPostUncheckedUpdateInput>
    /**
     * Choose, which FMBlogPost to update.
     */
    where: FMBlogPostWhereUniqueInput
  }

  /**
   * FMBlogPost updateMany
   */
  export type FMBlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FMBlogPosts.
     */
    data: XOR<FMBlogPostUpdateManyMutationInput, FMBlogPostUncheckedUpdateManyInput>
    /**
     * Filter which FMBlogPosts to update
     */
    where?: FMBlogPostWhereInput
    /**
     * Limit how many FMBlogPosts to update.
     */
    limit?: number
  }

  /**
   * FMBlogPost updateManyAndReturn
   */
  export type FMBlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * The data used to update FMBlogPosts.
     */
    data: XOR<FMBlogPostUpdateManyMutationInput, FMBlogPostUncheckedUpdateManyInput>
    /**
     * Filter which FMBlogPosts to update
     */
    where?: FMBlogPostWhereInput
    /**
     * Limit how many FMBlogPosts to update.
     */
    limit?: number
  }

  /**
   * FMBlogPost upsert
   */
  export type FMBlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * The filter to search for the FMBlogPost to update in case it exists.
     */
    where: FMBlogPostWhereUniqueInput
    /**
     * In case the FMBlogPost found by the `where` argument doesn't exist, create a new FMBlogPost with this data.
     */
    create: XOR<FMBlogPostCreateInput, FMBlogPostUncheckedCreateInput>
    /**
     * In case the FMBlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FMBlogPostUpdateInput, FMBlogPostUncheckedUpdateInput>
  }

  /**
   * FMBlogPost delete
   */
  export type FMBlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
    /**
     * Filter which FMBlogPost to delete.
     */
    where: FMBlogPostWhereUniqueInput
  }

  /**
   * FMBlogPost deleteMany
   */
  export type FMBlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FMBlogPosts to delete
     */
    where?: FMBlogPostWhereInput
    /**
     * Limit how many FMBlogPosts to delete.
     */
    limit?: number
  }

  /**
   * FMBlogPost without action
   */
  export type FMBlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FMBlogPost
     */
    select?: FMBlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FMBlogPost
     */
    omit?: FMBlogPostOmit<ExtArgs> | null
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


  export const FMBlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    authorName: 'authorName',
    authorImage: 'authorImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FMBlogPostScalarFieldEnum = (typeof FMBlogPostScalarFieldEnum)[keyof typeof FMBlogPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FMBlogPostWhereInput = {
    AND?: FMBlogPostWhereInput | FMBlogPostWhereInput[]
    OR?: FMBlogPostWhereInput[]
    NOT?: FMBlogPostWhereInput | FMBlogPostWhereInput[]
    id?: StringFilter<"FMBlogPost"> | string
    title?: StringFilter<"FMBlogPost"> | string
    content?: StringFilter<"FMBlogPost"> | string
    authorId?: StringFilter<"FMBlogPost"> | string
    authorName?: StringFilter<"FMBlogPost"> | string
    authorImage?: StringFilter<"FMBlogPost"> | string
    createdAt?: DateTimeFilter<"FMBlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"FMBlogPost"> | Date | string
  }

  export type FMBlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FMBlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FMBlogPostWhereInput | FMBlogPostWhereInput[]
    OR?: FMBlogPostWhereInput[]
    NOT?: FMBlogPostWhereInput | FMBlogPostWhereInput[]
    title?: StringFilter<"FMBlogPost"> | string
    content?: StringFilter<"FMBlogPost"> | string
    authorId?: StringFilter<"FMBlogPost"> | string
    authorName?: StringFilter<"FMBlogPost"> | string
    authorImage?: StringFilter<"FMBlogPost"> | string
    createdAt?: DateTimeFilter<"FMBlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"FMBlogPost"> | Date | string
  }, "id">

  export type FMBlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FMBlogPostCountOrderByAggregateInput
    _max?: FMBlogPostMaxOrderByAggregateInput
    _min?: FMBlogPostMinOrderByAggregateInput
  }

  export type FMBlogPostScalarWhereWithAggregatesInput = {
    AND?: FMBlogPostScalarWhereWithAggregatesInput | FMBlogPostScalarWhereWithAggregatesInput[]
    OR?: FMBlogPostScalarWhereWithAggregatesInput[]
    NOT?: FMBlogPostScalarWhereWithAggregatesInput | FMBlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FMBlogPost"> | string
    title?: StringWithAggregatesFilter<"FMBlogPost"> | string
    content?: StringWithAggregatesFilter<"FMBlogPost"> | string
    authorId?: StringWithAggregatesFilter<"FMBlogPost"> | string
    authorName?: StringWithAggregatesFilter<"FMBlogPost"> | string
    authorImage?: StringWithAggregatesFilter<"FMBlogPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FMBlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FMBlogPost"> | Date | string
  }

  export type FMBlogPostCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    authorImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FMBlogPostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    authorImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FMBlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FMBlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FMBlogPostCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    authorImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FMBlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FMBlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FMBlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FMBlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FMBlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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