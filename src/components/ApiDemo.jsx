import useFetch from '../hooks/useFetch';

export default function ApiDemo() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="api-demo">
      <div className="api-demo__head">
        <div>
          <h3>Live API Sample</h3>
          <p>Traveler directory pulled live from a public REST endpoint.</p>
        </div>
        <span className="api-demo__badge">
          {loading ? 'Loading…' : error ? 'Error' : `${data?.length ?? 0} records loaded`}
        </span>
      </div>

      {loading && <p>Fetching traveler records…</p>}
      {error && <p className="api-demo__error">Couldn&apos;t load records: {error}</p>}

      {!loading && !error && data && (
        <div className="api-demo__list">
          {data.slice(0, 4).map((user) => (
            <div className="api-demo__card" key={user.id}>
              <h5>{user.name}</h5>
              <p>{user.company?.name}</p>
              <p>{user.address?.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
