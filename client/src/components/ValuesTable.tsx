export function ValuesTable() {
  return (
    <table className="table-auto w-full">
      <thead className="bg-[#e0f1f9]">
        <tr>
          <th>Typical Values</th>
          <th>per 100ml serving</th>
          <th>per 50ml serving</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-bold">Energy kJ</td>
          <td>204</td>
          <td>102</td>
        </tr>
        <tr>
          <td className="font-bold">Energy kcal</td>
          <td>49</td>
          <td>24.5</td>
        </tr>
        <tr>
          <td className="font-bold">Fat</td>
          <td>1.7g</td>
          <td>0.85g</td>
        </tr>
        <tr>
          <td className="font-bold">of which saturate</td>
          <td>1g</td>
          <td>0.5g</td>
        </tr>
        <tr>
          <td className="font-bold">Carbohydrates</td>
          <td>5g</td>
          <td>2.5g</td>
        </tr>
        <tr>
          <td className="font-bold">of which sugars</td>
          <td>5g</td>
          <td>2.5g</td>
        </tr>
        <tr>
          <td className="font-bold">Calcium</td>
          <td>122mg</td>
          <td>61mg</td>
        </tr>
        <tr>
          <td className="font-bold">Protein</td>
          <td>3.4g</td>
          <td>1.2g</td>
        </tr>
      </tbody>
    </table>
  );
}
